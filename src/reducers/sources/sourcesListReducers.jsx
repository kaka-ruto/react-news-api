export function sourceHasErrored(state = false, action) {
    switch(action.type) {
        case 'SOURCE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function sourceIsLoading(state = false, action) {
    switch(action.type) {
        case 'SOURCE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function sources(state = [], action) {
    switch(action.type) {
        case 'FETCH_SOURCE_DATA_SUCCESS':
            return action.sources;

        default:
            return state;
    }
}