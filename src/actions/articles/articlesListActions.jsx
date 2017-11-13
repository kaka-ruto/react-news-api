export function articleHasErrored(bool) {
    // Return action
    return {
        // Unique identifier
        type: 'ARTICLE_HAS_ERRORED',
        // Payload
        hasErrored: bool
    };
}

export function articleIsLoading(bool) {
    return {
        type: 'ARTICLE_IS_LOADING',
        isLoading: bool
    };
}

export function fetchArticleDataSuccess(articles) {
    return {
        type: 'FETCH_ARTICLE_DATA_SUCCESS',
        articles: articles.articles
    };
}

export function fetchArticleData(url) {
    return (dispatch) => {
        dispatch(articleIsLoading(true));

        return fetch(url)
            .then((response) => {

                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(articleIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((articles) => dispatch(fetchArticleDataSuccess(articles)))
            .catch(() => dispatch(articleHasErrored(true)));
    };
}
