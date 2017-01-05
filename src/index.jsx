import React from 'react'
import ReactDOM from 'react-dom'
import { SearchkitManager,
  SearchkitProvider,
  Layout,
  LayoutResults,
  ActionBar,
  SearchBox,
  LayoutBody,
  SideBar,
  ActionBarRow,
  HitsStats,
  Hits,
  NoHits,
  TopBar,
  RangeFilter } from 'searchkit'

import DateRangeFilter from './DateRangeFilter'
import { ELASTICSEARCH_URL, SEARCHABLE_FIELD_NAME, DATE_FIELD_NAME } from './variables'

import 'searchkit/release/theme.css'

const searchkit = new SearchkitManager(ELASTICSEARCH_URL)

export const HitItem = (props)=> {
  const { result } = props
  return (
    <p>{ result._source[SEARCHABLE_FIELD_NAME] } - { result._source[DATE_FIELD_NAME] }</p>
  )
}

const App = ()=> (
  <SearchkitProvider searchkit={ searchkit }>
    <Layout>
      <TopBar>
        <SearchBox
          autofocus={ true }
          searchOnChange={ true }
          prefixQueryFields={ [`${SEARCHABLE_FIELD_NAME}^1`] }/>
      </TopBar>
      <LayoutBody>
        <SideBar>
          {
          /* That's date range filter.
            It shows two input fields with date picker */
          }
          <RangeFilter
            id='event_date_filter'
            title='Event Date Filter'
            field={ DATE_FIELD_NAME }
            rangeComponent={ DateRangeFilter }
            min={ 946684800000 }
            max={ new Date().getTime() }
          />
        </SideBar>
        <LayoutResults>
          <ActionBar>
              <ActionBarRow>
                <HitsStats />
              </ActionBarRow>
            </ActionBar>
          <Hits 
            mod="sk-hits-grid"
            sourceFilter={ [SEARCHABLE_FIELD_NAME, DATE_FIELD_NAME] }
            hitsPerPage={ 25 }
            itemComponent={ HitItem }
          />
          <NoHits/>
        </LayoutResults>
      </LayoutBody>
    </Layout>
  </SearchkitProvider>
)

ReactDOM.render(<App/>, document.getElementById('DatePickerExample'))