import React from 'react';
import { connect } from 'react-redux';
import { fetchSourceData } from '../../actions/sources/sourcesListActions.jsx'

class SourcesListComponent extends React.Component {
    componentDidMount() {
        this.props.fetchData('https://newsapi.org/v1/sources');
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
            <div>
                <h2>All popular news in one place</h2>
                <h3>Choose category</h3>
                <ul>
                    {
                        this.props.sources.map((source) => (
                            <li key = {source.id}>
                                {source.name} <br/>
                                {source.description} <br/>
                                {source.category} <br/>
                                {source.url} <br/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(SourcesListComponent);