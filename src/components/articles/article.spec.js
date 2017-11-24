import React from "react";
import { shallow } from 'enzyme';
import Article from './article.jsx';

describe('Article Component', () => {
    let article, wrapper;

    beforeEach(() => {
        article = {
            "id": "abc-news-au",
            "name": "ABC News (AU)"
        };
        wrapper = shallow(<Article article={article} />);
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