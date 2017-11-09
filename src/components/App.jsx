import React from 'react';
import SourcesContainer from '../containers/sources/SourcesContainer.jsx';
import ArticlesContainer from '../containers/articles/articleContainer.jsx';

const App = () => (
    <div>
        <div className='sources'>
            <SourcesContainer />
        </div>
        <div className='articles'>
            <ArticlesContainer />
        </div>
    </div>
);

export default App;