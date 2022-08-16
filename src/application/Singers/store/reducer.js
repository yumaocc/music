import Immutable, { fromJS } from 'immutable';
import * as actionTypes from './constants';
const defaultState = fromJS({
  singerList: [],
  enterLoading: true,     //控制进场Loading
  pageCount: 1            //这里是当前页数，我们即将实现分页功能
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SINGER_LIST:
      return state.set('singerList', action.data);
    case actionTypes.CHANGE_PAGE_COUNT:
      console.log('分页数量',action.data)
      return state.set('pageCount', action.data);//讲action带来的数据设置为页面最新的数据
    case actionTypes.CHANGE_ENTER_LOADING:
      return state.set('enterLoading', action.data);
    case actionTypes.CHANGE_PULLUP:
      let arr = Immutable.merge(action.data ,state.get('singerList'))
      return state.set('singerList', arr)
    default:
      return state;
  }
}