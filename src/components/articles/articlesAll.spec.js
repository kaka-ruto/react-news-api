import React from "react";
import { shallow } from 'enzyme';
import {articlesAll} from './articlesAll.jsx';

describe('All articles Component', () => {
    let articles, wrapper;

    beforeEach(() => {
        articles = [{
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        },
        {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        }];
        wrapper = shallow(<articlesAll articles={articles} />);
    });

    it('renders the dumb component', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('it renders a group of cards', () => {
        expect(wrapper.find('Card.Group'));
    });

    it("renders card with it's props", () => {
        expect(wrapper.props()).toBeDefined;
        expect(wrapper.props()).toBe===articles;
        expect(typeof(wrapper.props()).isObject);
    });

});