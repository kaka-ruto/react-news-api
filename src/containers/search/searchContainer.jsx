// import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { fetchSourceData } from '../../actions/sources/sourcesListActions.jsx';
// import SourcesList from '../../components/sources/SourcesList.jsx';
// import { Input } from 'semantic-ui-react';
// import * as types from '../../constants/actionTypes/allActionTypes.jsx';
// // import {fetchSearchSources, iAmNotSearching} from '../../actions/sources/sourcesListActions.jsx';

// class SearchBar extends React.Component {
//     onSearchSources = event => {
//         if (event.target.value.length > 0) {
//             this.props.fetchSearchSources('https://newsapi.org/v1/sources');
//         }
//         else {
//             this.props.iAmNotSearching
//         }
//     }

//     render() {
//         if (this.props.hasErrored) {
//             return (
//                 <p> Sorry an error occured while loading the page </p>
//             );
//         }

//         if (this.props.isLoading) {
//             return (
//                 <p>Loading Loading </p>
//             );
//         }

//         return (
//             <div>
//                 <Input icon='search' placeholder='Search sources... '
//                     onChange = {this.onSearchSources}
//                 />
//                 <SourcesList sources={this.props.searchedSources} onSourceClick={this.onSourceClick} />
//             </div>
//         );
//     }
// }

// SearchBar.propTypes = {
//     hasErrored: PropTypes.bool.isRequired,
//     isLoading: PropTypes.bool.isRequired,
//     searchedSources: PropTypes.array.isRequired
// };

// const mapStateToProps = (state) => {
//     return {
//         searchedSources: state.searchedSources,
//         hasErrored: state.sourceHasErrored,
//         isLoading: state.sourceIsLoading
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchSearchSources: (url) => dispatch(fetchSourceData(url))
//     };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);