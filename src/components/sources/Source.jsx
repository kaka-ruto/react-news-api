import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Source = ({ onSourceClick, source }) => (
        <Card.Group>
            <Card onClick={onSourceClick(source.id)}
                header={source.name}
                meta={source.category}
                description={source.description}
            />
        </Card.Group>
);

Source.propTypes = {
    // onClick: PropTypes.func.isRequired,
    source: PropTypes.object.isRequired
};

export default Source;