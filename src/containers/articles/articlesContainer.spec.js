import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { shallow } from 'enzyme';
import articleContainer from './articleContainer.jsx';


describe('articleContainer',() => {
	let mockStore = configureMockStore();
	let wrapper, store, initialArticles;

	beforeEach(function() {
		initialArticles = ['one'];
		let initialState = {
            articles: initialArticles,
            hasErrored: false,
            isLoading: false
		};
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <articleContainer/>
            </Provider>
        );
	});

	it('renders the smart component',() => {
		expect(wrapper.length).toEqual(1);
	});
});