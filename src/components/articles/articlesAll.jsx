import React from 'react';
import { Header, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Article from './article.jsx';


const Articles = ({ articles }) => (
    <div>
        <Header as='h2'>Articles</Header>
        <ul className='horizontal-list'>
            <List>
                {
                    articles.map((article) => (
                        <li key={article.url}>
                            <Article article={article} />
                        </li>
                    ))
                }
            </List>
        </ul>
    </div>
);

Articles.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
        }).isRequired
  ).isRequired
};

export default Articles;