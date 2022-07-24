import { fromJS } from "immutable";
import * as actionTypes from './constants';

const defaultState = fromJS({
    banner: [],
    recommend: [],
    enterLoading:true
})

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case actionTypes.CHANGE_BANNER:
            return state.set('banner', action.data)
        case actionTypes.CHANGE_RECOMMEND_LIST:
            return state.set('recommend', action.data)
        case actionTypes.CHANGE_ENTER_LOADING :
            return state.set ('enterLoading', action.data);
        default:
            return state
    }
}