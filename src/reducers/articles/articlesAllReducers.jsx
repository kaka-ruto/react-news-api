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

export function articlesUrl(state = `https://newsapi.org/v1/articles?source=techcrunch&apiKey=e7e5240e9ad143ae9170058613e5d879`, action) {
    switch(action.type) {
        case 'GET_ARTICLE_URL':
            return action.articlesUrl;

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
