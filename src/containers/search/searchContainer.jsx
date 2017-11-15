import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchSourceData } from '../../actions/sources/sourcesListActions.jsx';
import SourcesList from '../../components/sources/SourcesList.jsx';
import { Input } from 'semantic-ui-react';
import {search} from '../../actions/search/searchAction.jsx';

class SearchBar extends React.Component {
    render() {
        let {value} = this.props;
        return (
            <Input icon='search' placeholder='Search sources... '
            onChange = {(e) => search(e.target.value)}
            value = {value}
        />
        );
    }
}

function mapStateToProps(state) {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(fetchSourceData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);