import * as reducers from './articlesAllReducers.jsx';
import * as types from '../../constants/actionTypes/allActionTypes.jsx';

describe('Reducers: All articles', () => {
    it('returns proper initial state', () => {
        expect(reducers.articleHasErrored(undefined, {})).toEqual(false);
        expect(reducers.articleIsLoading(undefined, {})).toEqual(false);
        expect(reducers.articles(undefined, {})).toEqual([]);
      });

      it('returns same state for unknown action', () => {
        expect(reducers.articles([
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
        expect(reducers.articles([{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
          }],
          {
          type: 'FETCH_ARTICLE_DATA_SUCCESS',
          articles: [{
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
        expect(reducers.articleIsLoading(true, {
          type: types.ARTICLE_IS_LOADING,
          isLoading: false
        })).toEqual(false);
      });

      it('should handle hasErrored', () => {
        expect(reducers.articleHasErrored(false, {
          type: types.ARTICLE_HAS_ERRORED,
          hasErrored: true
        })).toEqual(true);
      });
});