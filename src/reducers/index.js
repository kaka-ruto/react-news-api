// This is the root reducer
 import { combineReducers } from 'redux';
 import { sources, sourceHasErrored, sourceIsLoading } from './sources/sourcesListReducers.jsx';
 import { articles, articleHasErrored, articleIsLoading, articlesUrl } from './articles/articlesAllReducers.jsx';

 export default combineReducers({
     sources,
     sourceHasErrored,
     sourceIsLoading,
     articlesUrl,
     articles,
     articleHasErrored,
     articleIsLoading
 });