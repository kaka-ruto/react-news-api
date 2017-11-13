import { fetchSourceData } from './sourcesListActions.jsx';
import * as types from '../../constants/actionTypes/sourcesTypes.jsx';
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

describe('Actions::Sources List', () => {
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

        return store.dispatch(fetchSourceData(url)).then(() => {
            // return of async actions
            expect(expectedActions.length).toBe(2);
            expect(store.getActions()).toEqual(expectedActions);
          });
    });
});