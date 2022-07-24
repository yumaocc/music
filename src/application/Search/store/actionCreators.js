import {SEARCH_SONG_REQUEST ,SEARCH_HOT_REQUEST ,SEARCH_DEFAULT_REQUEST ,SEARCH_SUGGEST_REQUEST} from './constants'
import {getSearchRequest ,getHotSearch ,getDefaultSearch ,getSearchSuggest} from '../../../api/request'
import { fromJS } from 'immutable'

export const changeSearchAction = (data) => {
  return {
    type: SEARCH_SONG_REQUEST,
    data:fromJS(data)
  }
}
const changeHotSearchAction = (data) => {
  return {
    type : SEARCH_HOT_REQUEST,
    data : fromJS(data)
  }
}
const changeDefaultAction = (data) => {
  return {
    type: SEARCH_DEFAULT_REQUEST,
    data : fromJS(data)
  }
}
const changeSearchSuggestAction = (data) => {
  return {
    type:SEARCH_SUGGEST_REQUEST,
    data:fromJS(data)
  }
}


export const changeSearch = (param ,dispatch) => {
  getSearchRequest(param).then(res => {
    let data = res.data.result.songs
    dispatch(changeSearchAction(data))
  })
}

export const changeHotSearch = (dispatch) => {
  getHotSearch().then(res => {
    let data = res.data.result.hots
    dispatch(changeHotSearchAction(data))
  })
}

export const changeDefault = (dispatch) => {
  getDefaultSearch().then(res => {
    let data = res.data.data.showKeyword
    dispatch(changeDefaultAction(data))
  })
}

export const changeSearchSuggest = (param ,dispatch) => {
  getSearchSuggest(param).then(res => {
    let data = res.data.result.allMatch
    dispatch(changeSearchSuggestAction(data))
    
  })
}