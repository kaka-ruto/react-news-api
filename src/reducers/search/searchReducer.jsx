import { SEARCH } from "../../constants/actionTypes/allActionTypes.jsx";
import {sources} from '../index.js';

const initialState = {
    currentLyDisplayedSources: [],
    value: '',
    filteredSources: []
};

export function search(state = initialState, action) {
    switch(action.type) {
        case SEARCH: {
            const currentLyDisplayedSources = sources;
            const {value} = action;
            const filteredSources = state.currentLyDisplayedSources.filter((value) => value.includes(value));
            return {value, filteredSources};
        }

        default:
            return state;
    }
}