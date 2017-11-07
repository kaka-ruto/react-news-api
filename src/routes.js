import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';

//Components
import sourcesListComponent from './components/sources/sourcesListComponent.jsx';

export default (
    <Route path = '/sources' component = {sourcesListComponent}>
    </Route>
)