import React from "react";
import { shallow } from 'enzyme';
import Source from './Source.jsx';

describe('Source Component', () => {
    let onSourceClick, source, wrapper;

    beforeEach(() => {
        onSourceClick = jest.fn();
        source = {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        };
        wrapper = shallow(<Source source={source} onSourceClick={onSourceClick} />);
    });

    it('renders the dumb component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('it renders card', () => {
        expect(wrapper.find('Card'));
    });

    it("renders card with it's props", () => {
        expect(wrapper.find('Card').props()).toExist;
    });
});