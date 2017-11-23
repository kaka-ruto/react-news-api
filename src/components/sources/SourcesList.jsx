import React from 'react';
import { Header, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Source from './Source.jsx';

export const SourcesList = ({ onSourceClick, sources }) => (
    <div className="center aligned">
        <br/>
        <Header as='h2'>News Sources</Header>
        <ul>
            <List>
                {
                    sources.map((source) => (
                        <li key = {source.id}>
                            <Source source={source} onSourceClick={onSourceClick} />
                        </li>
                    ))
                }
            </List>
        </ul>
    </div>
);

SourcesList.propTypes = {
    sources: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        // description: PropTypes.string.isRequired
        }).isRequired
  ).isRequired,
    onSourceClick: PropTypes.func.isRequired
};

export default SourcesList;