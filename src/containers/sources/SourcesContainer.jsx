import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SourcesList from '../../components/sources/SourcesList.jsx';
import { Input } from 'semantic-ui-react';
import * as sourceActions from '../../actions/sources/sourcesListActions.jsx';
import * as articleActions from '../../actions/articles/articlesListActions.jsx';
import _ from 'lodash';

const WAIT_INTERVAl = 2000;
const ENTER_KEY = 13;

export class SourcesContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchString: props.searchString,
            searchResults: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.onSearchSources = this.onSearchSources.bind(this);
    }

    componentWillMount() {
        this.timer = null;
    }

    componentDidMount() {
        this.props.fetchData('https://newsapi.org/v1/sources');
    }

    onSourceClick = id => e => {
        e.preventDefault();
        this.props.changeUrl(`https://newsapi.org/v1/articles?source=${id}&apiKey=e7e5240e9ad143ae9170058613e5d879`);
        this.props.fetchArticleData(this.props.articlesUrl);
    }

    handleChange(event) {

        clearTimeout(this.timer);

        this.setState({searchString: event.target.value}, ()=>{
            this.timer = setTimeout(this.onSearchSources, WAIT_INTERVAl);
        });
    }

    handleKeyUp(e) {
        if (e.keyCode === ENTER_KEY) {
            this.onSearchSources();
        }
    }

    onSearchSources() {

        let searchString = this.state.searchString;

        if (searchString.length > 0) {
            let searchResults = _.filter(this.props.sources, (item) => {
                return item.id.indexOf(searchString) > -1
                        || item.name.indexOf(searchString) > -1
                        || item.category.indexOf(searchString) > -1
                        || item.description.indexOf(searchString) > -1;
            });

            this.setState({
                searchResults
            });

            console.log('sea', searchResults)
        }
        else {
            this.setState({
                searchResults: []
            });
        }
    }

    render() {
        // console.log('onseacg', this.onSearchSources())
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
                <Input action='Search'
                    placeholder='Search sources... '
                    name="searchString"
                    value={this.state.searchString}
                    onChange={event => this.handleChange(event)}
                    onKeyUp={this.handleKeyUp}
                />
                <SourcesList sources={this.state.searchResults.length > 0 ? this.state.searchResults : this.props.sources} onSourceClick={this.onSourceClick} />
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
        hasErrored: state.sourceHasErrored,
        isLoading: state.sourceIsLoading,
        sources: state.sources,
        articlesUrl: state.articlesUrl
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUrl: (url) => dispatch(articleActions.changeUrl(url)),
        fetchData: (url) => dispatch(sourceActions.fetchSourceData(url)),
        fetchArticleData: (url) => dispatch(articleActions.fetchArticleData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesContainer);