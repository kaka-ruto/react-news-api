import React from 'react';
import { Route } from 'react-router-dom';

//Components
import sourcesList from './components/sources/SourcesList.jsx';

export default (
    <Route path = '/sources' component = {sourcesList}>
    </Route>
)