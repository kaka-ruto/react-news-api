// This is the application's entry point
// Babel polyfill will emulate a full ES2015 environemnt so we can enjoy goodies like Promises
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/App.jsx';
import SourcesContainer from './containers/sources/SourcesContainer.jsx';

import configureStore from './store/configureStore';

const store = configureStore();

render(
    <Provider store={store}>
        <SourcesContainer />
    </Provider>,
    document.getElementById('app')
);