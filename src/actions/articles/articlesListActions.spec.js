import * as actions from './articlesListActions.jsx';
import * as types from '../../constants/actionTypes/allActionTypes.jsx';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import fetchMock from 'fetch-mock';

const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);
const middlewares = [reduxImmutableStateInvariant(),
                    thunk,
                    reactRouterMiddleware];
const mockStore = configureMockStore(middlewares);

describe('Actions::Thunk Async actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    // it('handles fetchArticles success', () => {
    //     const store = mockStore({ articles: [] });
    //     const url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=e7e5240e9ad143ae9170058613e5d879';
    //     let articles = [{
    //                     "id": "abc-news-au",
    //                     "name": "ABC News (AU)"
    //                 },
    //                 {
    //                     "id": "xyz-news-au",
    //                     "name": "XYZ News (XY)"
    //                 }];
    //     const expectedActions = [
    //         { type: types.ARTICLE_IS_LOADING, "isLoading": true, },
    //         { type: types.FETCH_ARTICLE_DATA_SUCCESS, articles }
    //         ];

    //     fetchMock.get(url, 200);

    //     return store.dispatch(actions.fetchArticleData(url)).then(() => {
    //         // return of async actions
    //         expect(expectedActions.length).toBe(2);
    //         expect(store.getActions()).toEqual(expectedActions);
    //       });
    // });

    it('handles fetchArticles failure', () => {
        const store = mockStore({ articles: [] });
        const url = 'https://newsapi.org/v1/articles?source=techcrunch&apiKey=e7e5240e9ad143ae9170058613e5d879';

        const expectedActions = [
            { type: types.ARTICLE_IS_LOADING, "isLoading": true, },
            { type: types.ARTICLE_HAS_ERRORED, "hasErrored": true, }
            ];

        fetchMock.get(url, 400);

        return store.dispatch(actions.fetchArticleData(url)).then(() => {
            // return of async actions
            expect(expectedActions.length).toBe(2);
            expect(store.getActions()).toEqual(expectedActions);
          });
    });

    it('fetchArticleData errors when fetch fails', () => {
        const store = mockStore();
        const expectedAction = [
            { type: types.ARTICLE_IS_LOADING, isLoading: true },
            { type: types.ARTICLE_HAS_ERRORED, hasErrored:true }
        ];
        const url = 'https://newsapi.org/v1/articls?source=teccrunch&apiKey=ver-bad-url';
        fetchMock.getOnce(url, 400);

        return store.dispatch(actions.fetchArticleData(url)).then(() => {
            // return async actions
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('Actions::pure actions', () => {
    it('should create an isloading action', () => {
        const isLoading = true;
        const expectedAction = {
            type: types.ARTICLE_IS_LOADING,
            isLoading: true
        };

        expect(actions.articleIsLoading(isLoading)).toEqual(expectedAction);
    });

    it('should create an hasErrored action', () => {
        const hasErrored = false;
        const expectedAction = {
            type: types.ARTICLE_HAS_ERRORED,
            hasErrored: false
        };

        expect(actions.articleHasErrored(hasErrored)).toEqual(expectedAction);
    });

    // it('should create an fetchArticleDataSuccess action', () => {
    //     const articles = [{
    //                             "id": "abc-news-au",
    //                             "name": "ABC News (AU)"
    //                         },
    //                         {
    //                             "id": "xyz-news-au",
    //                             "name": "XYZ News (XY)"
    //                         }];
    //     const expectedAction = {
    //         type: types.FETCH_ARTICLE_DATA_SUCCESS,
    //         articles
    //     };

    //     expect(actions.fetchArticleDataSuccess(articles)).toEqual(expectedAction);
    // });
});