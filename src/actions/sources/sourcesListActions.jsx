export function sourceHasErrored(bool) {
    // Return action
    return {
        // Unique identifier
        type: 'SOURCE_HAS_ERRORED',
        // Payload
        hasErrored: bool
    };
}

export function sourceIsLoading(bool) {
    return {
        type: 'SOURCE_IS_LOADING',
        isLoading: bool
    };
}

export function fetchSourceDataSuccess(sources) {
    return {
        type: 'FETCH_SOURCE_DATA_SUCCESS',
        sources: sources.sources.slice(0, 10)
    };
}

export function fetchSourceData(url) {
    return (dispatch) => {
        dispatch(sourceIsLoading(true));

        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(sourceIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((sources) => dispatch(fetchSourceDataSuccess(sources)))
            .catch(() => dispatch(sourceHasErrored(true)));
    };
}