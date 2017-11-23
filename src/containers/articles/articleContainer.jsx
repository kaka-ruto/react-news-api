import React from 'react';
import { connect } from 'react-redux';
import { fetchArticleData } from '../../actions/articles/articlesListActions.jsx';
import PropTypes from 'prop-types';
import Articles from '../../components/articles/articlesAll.jsx';
import * as articleActions from '../../actions/articles/articlesListActions.jsx';
import { Dropdown } from 'semantic-ui-react';

class ArticlesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    componentDidMount() {
        this.props.fetchData(this.props.articlesUrl);
    }

    // componentWillUpdate() {
    //     this.props.fetchArticleData(this.props.articlesUrl);
    // }

    sortBy = (e, {value}) => {
        this.setState({value }, () => {
            this.props.changeUrl(this.props.articlesUrl + `&sortBy=${value}`);
            this.props.fetchArticleData(this.props.articlesUrl);
        });
    }

    render() {
        const options = [
            { key: 1, text: 'Top', value: 'top' },
            { key: 2, text: 'Latest', value: 'latest' },
            { key: 3, text: 'Popular', value: 'popular' },
          ]
          const value = this.state.value;

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
                <Dropdown
                    onChange={this.sortBy}
                    options={options}
                    placeholder='Filter headlines'
                    selection
                    value={value}
                    simple item
                /> <br/> <br/>
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
        isLoading: state.articleIsLoading,
        articlesUrl: state.articlesUrl
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeUrl: (url) => dispatch(articleActions.changeUrl(url)),
        fetchData: (url) => dispatch(fetchArticleData(url)),
        fetchArticleData: (url) => dispatch(articleActions.fetchArticleData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);