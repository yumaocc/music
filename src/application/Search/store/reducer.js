import { fromJS } from "immutable";
import * as actionTypes from './constants';

const defaultState = fromJS({
    searchQuest: [],
    hots: [],
    default: '',
    suggest: [],
    loading : false
})


export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.SEARCH_SONG_REQUEST:
            return state.set('searchQuest', action.data)

        case actionTypes.SEARCH_HOT_REQUEST:
            return state.set('hots', action.data)

        case actionTypes.SEARCH_DEFAULT_REQUEST:
            return state.set('default', action.data);

        case actionTypes.SEARCH_SUGGEST_REQUEST:
            return state.set('suggest', action.data)
        default:
            return state
    }
}