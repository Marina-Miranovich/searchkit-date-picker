# Searchkit date-picker example
Just an example how date picker could be implemented with Searchkit and RangeFilter

## How to run it locally
* Clone the repo
* Run `npm install` in project folder
* Update values for all variables in src/variables.jsx with yours
* Run `npm start`
* Go to http://localhost:8080/

## Implementation details
I used [react-datepicker](https://github.com/Hacker0x01/react-datepicker) for this implementation, but you could use anything that you want. Only limitations - date field should be in miliseconds.
Create custom component that will display date inputs (in my case it's DateRangeFilter) and set it in rangeComponent attribute for RangeFilter searchkit component. In custom component use onFinished method from component's props for perform search (see updateSearch method in src/DateRangeFilter.jsx for usage example).
