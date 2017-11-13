import React from "react";
import { shallow } from 'enzyme';
import SourcesList from './SourcesList.jsx';

describe('SourcesList Component', () => {
    let onSourceClick, sources, wrapper;

    beforeEach(() => {
        onSourceClick = jest.fn();
        sources = [{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        {
            "id": "xyz-news-au",
            "name": "XYZ News (XY)"
        }];
        wrapper = shallow(<SourcesList sources={sources} onSourceClick={onSourceClick} />);
    });

    it('renders the dumb component', () => {
        expect(wrapper.length).toEqual(1);
    });
});