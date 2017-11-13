import React from 'react';
import { connect } from 'react-redux';
import { fetchArticleData } from '../../actions/articles/articlesListActions.jsx';
import PropTypes from 'prop-types';
import Source from '../../components/sources/Source.jsx';
import Articles from '../../components/articles/articlesAll.jsx';

class ArticlesContainer extends React.Component {
    // componentDidMount(id) {
    //     this.props.fetchData(`https://newsapi.org/v1/articles?source=${id}&apiKey=e7e5240e9ad143ae9170058613e5d879`);
    // }

    render() {
        if (this.props.hasErrored) {
            return (
                <p> Sorry an error occured while loading the page </p>
            );
        }

        if (this.props.isLoading) {
            return (
                <p>Loading Loading </p>
            );
        }

        return (
            <div>
                <Articles articles={this.props.articles} />
            </div>
        );
    }
}

ArticlesContainer.propTypes = {
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        articles: state.articles,
        hasErrored: state.articleHasErrored,
        isLoading: state.articleIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchArticleData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);