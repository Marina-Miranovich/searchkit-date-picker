/* BEFORE RUN APP SET ALL VARIABLE WITH YOUR LOCAL SETUP */

/* Url to your elastic search server */
export const ELASTICSEARCH_URL = ''; //Ex. http://localhost:9200 or http://demo.searchkit.co/api

/* Name of any indexed field. Need for top search */
export const SEARCHABLE_FIELD_NAME = ''; //Ex. 'title'

/* Name of date field. Need for filtering by date.
 * Should be in miliseconds
 */
export const DATE_FIELD_NAME = ''; //Ex. 'Released'