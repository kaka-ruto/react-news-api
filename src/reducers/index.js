// This is the root reducer
 import { combineReducers } from 'redux';
 import { sources, sourceHasErrored, sourceIsLoading, selectedSource } from './sources/sourcesListReducers.jsx';
 import { articles, articleHasErrored, articleIsLoading } from './articles/articlesAllReducers.jsx';

 export default combineReducers({
     sources,
     sourceHasErrored,
     sourceIsLoading,
     selectedSource,
     articles,
     articleHasErrored,
     articleIsLoading
 });