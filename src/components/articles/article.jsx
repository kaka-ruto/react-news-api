import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const Article = ({ article }) => (
    <div>
        <Card.Group>
            <Card
                href={article.url}
                target="_blank"
                meta={article.author}
                header={article.title}
                description={article.description}
                image={article.urlToImage}
            />
        </Card.Group>
    </div>
);

Article.propTypes = {
    article: PropTypes.object.isRequired
};

export default Article;