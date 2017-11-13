import React from 'react';
import { connect } from 'react-redux';
import { fetchSourceData } from '../../actions/sources/sourcesListActions.jsx';
import { Container, Header, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SourcesList from '../../components/sources/SourcesList.jsx';

class SourcesContainer extends React.Component {
    componentDidMount() {
        this.props.fetchData('http://newsapi.org/v1/sources');
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

        return (
            <SourcesList sources={this.props.sources} />
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
        fetchData: (url) => dispatch(fetchSourceData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SourcesContainer);