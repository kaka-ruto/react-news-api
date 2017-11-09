export function articleHasErrored(state = false, action) {
    switch(action.type) {
        case 'ARTICLE_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function articleIsLoading(state = false, action) {
    switch(action.type) {
        case 'ARTICLE_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function articles(state = [], action) {
    switch(action.type) {
        case 'FETCH_ARTICLE_DATA_SUCCESS':
            return action.articles;

        default:
            return state;
    }
}
