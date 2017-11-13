import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Source = ({ onClick, source }) => (
    <div>
        <Card.Group>
            <Card
                href={source.url}
                header={source.name}
                meta={source.category}
                description={source.description}
            />
        </Card.Group>
    </div>
);

Source.propTypes = {
    // onClick: PropTypes.func.isRequired,
    source: PropTypes.array.isRequired
};

export default Source;