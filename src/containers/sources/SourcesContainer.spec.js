import React from 'react';
import configureMockStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import { shallow } from 'enzyme';
import SourcesContainer from './SourcesContainer.jsx';


describe('SourcesContainer',() => {
	let mockStore = configureMockStore();
	let wrapper, store, initialSources;

	beforeEach(function() {
		initialSources = ['one'];
		let initialState = {
            sources: initialSources,
            hasErrored: false,
            isLoading: false
		};
        store = mockStore(initialState);
        wrapper = shallow(
            <Provider store={store}>
                <SourcesContainer/>
            </Provider>
		);
	});

	it('renders the smart component',() => {
		expect(wrapper.length).toEqual(1);
	});
});