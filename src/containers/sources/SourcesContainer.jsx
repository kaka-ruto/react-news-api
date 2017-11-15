import React from 'react';
import { connect } from 'react-redux';
import { fetchSourceData } from '../../actions/sources/sourcesListActions.jsx';
import { fetchArticleData } from '../../actions/articles/articlesListActions.jsx';
import PropTypes from 'prop-types';
import SourcesList from '../../components/sources/SourcesList.jsx';
import SearchBar from '../../containers/search/searchContainer.jsx';


export class SourcesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchData('https://newsapi.org/v1/sources');
    }

    onSourceClick = id => e => {
        e.preventDefault();
        this.props.fetchArticleData(`https://newsapi.org/v1/articles?source=${id}&apiKey=e7e5240e9ad143ae9170058613e5d879`);
    }


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

        const {search, value} = this.props;
        return (
            <div>
                <SearchBar />
                <SourcesList sources={this.props.sources} onSourceClick={this.onSourceClick} />
            </div>
        );
    }
}

SourcesContainer.propTypes = {
    hasErrored: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
    sources: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        sources: state.sources,
        hasErrored: state.sourceHasErrored,
        isLoading: state.sourceIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSourceData(url)),
        fetchArticleData: (url) => dispatch(fetchArticleData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesContainer);