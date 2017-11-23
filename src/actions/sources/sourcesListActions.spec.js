import * as actions from './sourcesListActions.jsx';
import * as types from '../../constants/types/types.jsx';
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

    // it('handles fetchSources success', () => {
    //     const store = mockStore({ sources: [] });
    //     const url = 'http://newsapi.org/v1/sources';
    //     let sources = [{
    //                     "id": "abc-news-au",
    //                     "name": "ABC News (AU)"
    //                 },
    //                 {
    //                     "id": "xyz-news-au",
    //                     "name": "XYZ News (XY)"
    //                 }];
    //     const expectedActions = [
    //         { type: types.SOURCE_IS_LOADING, "isLoading": true, },
    //         { type: types.FETCH_SOURCE_DATA_SUCCESS, sources: sources }
    //         ];

    //     fetchMock.get(url, 200);

    //     return store.dispatch(fetchSourceData(url)).then(() => {
    //         // return of async actions
    //         expect(expectedActions.length).toBe(2);
    //         expect(store.getActions()).toEqual(expectedActions);
    //       });
    // });

    it('handles fetchSources failure', () => {
        const store = mockStore();
        const url = 'http://newsapi.org/v1/sources';

        const expectedActions = [
            { type: types.SOURCE_IS_LOADING, "isLoading": true, },
            { type: types.SOURCE_HAS_ERRORED, "hasErrored": true, }
            ];

        fetchMock.get(url, 400);

        return store.dispatch(actions.fetchSourceData(url)).then(() => {
            // return of async actions
            expect(expectedActions.length).toBe(2);
            expect(store.getActions()).toEqual(expectedActions);
          });
    });

    it('fetchSourceData errors when fetch fails due to bad url', () => {
        let sources = [];
        const expectedAction = [
            { type: types.SOURCE_IS_LOADING, isLoading: true },
            { type: types.SOURCE_HAS_ERRORED, hasErrored:true }
        ];
        const url = 'https://newsapi.org/v1/sources-bad-url';
        fetchMock.getOnce(url, 400);
        const store = mockStore(sources);

        return store.dispatch(actions.fetchSourceData(url)).then(() => {
            // return async actions
            expect(store.getActions()).toEqual(expectedAction);
        });
    });
});

describe('Actions::pure actions', () => {
    it('should create an isloading action', () => {
        const isLoading = true;
        const expectedAction = {
            type: types.SOURCE_IS_LOADING,
            isLoading: true
        };

        expect(actions.sourceIsLoading(isLoading)).toEqual(expectedAction);
    });

    it('should create an hasErrored action', () => {
        const hasErrored = false;
        const expectedAction = {
            type: types.SOURCE_HAS_ERRORED,
            hasErrored: false
        };

        expect(actions.sourceHasErrored(hasErrored)).toEqual(expectedAction);
    });

    // it('should create an fetchSourceDataSuccess action', () => {
    //     const sources = [{
    //                             "id": "abc-news-au",
    //                             "name": "ABC News (AU)"
    //                         },
    //                         {
    //                             "id": "xyz-news-au",
    //                             "name": "XYZ News (XY)"
    //                         }];
    //     const expectedAction = {
    //         type: types.FETCH_SOURCE_DATA_SUCCESS,
    //         sources
    //     };

    //     expect(actions.fetchSourceDataSuccess(sources)).toEqual(expectedAction);
    // });
});