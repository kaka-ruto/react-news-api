import React from "react";
import { shallow } from 'enzyme';
import SourcesList from './SourcesList.jsx';

describe('SourcesList Component', () => {
    it('should render sourceslistcomponent', () => {
        let sources = [{
                    "id": "abc-news-au",
                    "name": "ABC News (AU)"
                },
                {
                    "id": "xyz-news-au",
                    "name": "XYZ News (XY)"
                }];
        const wrapper = shallow(<SourcesList sources={sources} />);
        // console.log(wrapper.props())
        // expect(wrapper.containsAllMatchingElements([
        //     <SourcesList />
        // ])).toEqual(true);
    });
});