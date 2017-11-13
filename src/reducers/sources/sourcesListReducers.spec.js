import { sourceHasErrored, sourceIsLoading, sources } from './sourcesListReducers.jsx';

describe('Reducers: Sources List', () => {
    it('returns proper initial state', () => {
        expect(sourceHasErrored(undefined, {})).toEqual(false);
        expect(sourceIsLoading(undefined, {})).toEqual(false);
        expect(sources(undefined, {})).toEqual([]);
      });

      it('returns same state for unknown action', () => {
        expect(sources([
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
        expect(sources([{
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
});