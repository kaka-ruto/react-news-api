// This is the root reducer
 import { combineReducers } from 'redux';
 import { sources, sourceHasErrored, sourceIsLoading } from './sources/sourcesListReducers.jsx';

 export default combineReducers({
     sources,
     sourceHasErrored,
     sourceIsLoading
 });