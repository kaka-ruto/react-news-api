// This is the root reducer
 import { combineReducers } from 'redux';
 import { sources, sourceHasErrored, sourceIsLoading } from './sources/sourcesListReducers.jsx';
 import { articles, articleHasErrored, articleIsLoading } from './articles/articlesAllReducers.jsx';
 import { search } from './search/searchReducer.jsx';

 export default combineReducers({
     sources,
     sourceHasErrored,
     sourceIsLoading,
     articles,
     articleHasErrored,
     articleIsLoading,
     search
 });