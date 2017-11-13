import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Source = ({ onSourceClick, source }) => (
    <div>
        <Card.Group>
            <Card onClick={onSourceClick(source.id)}
                /* href={source.url} */
                header={source.name}
                meta={source.category}
                description={source.description}
            />
        </Card.Group>
    </div>
);

Source.propTypes = {
    // onClick: PropTypes.func.isRequired,
    source: PropTypes.object.isRequired
};

export default Source;