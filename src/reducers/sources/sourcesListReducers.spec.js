import * as reducers from './sourcesListReducers.jsx';
import * as types from '../../constants/actionTypes/allActionTypes.jsx';

describe('Reducers: Sources List', () => {
    it('returns proper initial state', () => {
        expect(reducers.sourceHasErrored(undefined, {})).toEqual(false);
        expect(reducers.sourceIsLoading(undefined, {})).toEqual(false);
        expect(reducers.sources(undefined, {})).toEqual([]);
      });

      it('returns same state for unknown action', () => {
        expect(reducers.sources([
          {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          }],
          { type: 'UNKNOWN_ACTION' }
        )).toEqual([{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          }]);
      });

      it('adds the sources', () => {
        expect(reducers.sources([{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          }],
          {
          type: 'FETCH_SOURCE_DATA_SUCCESS',
          sources: [{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          },
          {
            "id": "xyz-news-au",
            "name": "XYZ News (XY)"
          }],
        })).toEqual([
            {
                "id": "abc-news-au",
                "name": "ABC News (AU)"
              },
              {
                "id": "xyz-news-au",
                "name": "XYZ News (XY)"
              }
        ]);
      });

      it('should handle isLoading', () => {
        expect(reducers.sourceIsLoading(true, {
          type: types.SOURCE_IS_LOADING,
          isLoading: false
        })).toEqual(false);
      });

      it('should handle hasErrored', () => {
        expect(reducers.sourceHasErrored(false, {
          type: types.SOURCE_HAS_ERRORED,
          hasErrored: true
        })).toEqual(true);
      });
});