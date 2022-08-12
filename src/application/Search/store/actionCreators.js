import { SEARCH_SONG_REQUEST, SEARCH_HOT_REQUEST, SEARCH_DEFAULT_REQUEST, SEARCH_SUGGEST_REQUEST, SEARCH_LOADING } from './constants'
import { getSearchRequest, getHotSearch, getDefaultSearch, getSearchSuggest } from '../../../api/request'
import { fromJS } from 'immutable'

export const changeSearchAction = (data) => {
  return {
    type: SEARCH_SONG_REQUEST,
    data: fromJS(data)
  }
}
const changeHotSearchAction = (data) => {
  return {
    type: SEARCH_HOT_REQUEST,
    data: fromJS(data)
  }
}
const changeDefaultAction = (data) => {
  return {
    type: SEARCH_DEFAULT_REQUEST,
    data: fromJS(data)
  }
}
export const changeSearchSuggestAction = (data) => {
  return {
    type: SEARCH_SUGGEST_REQUEST,
    data: fromJS(data)
  }
}
export const changeSearchLoading = (data) => {
  return {
    type: SEARCH_LOADING,
    data
  }
}


export const changeSearch = async (param, dispatch) => {
  try {
    let res = await getSearchRequest(param)
    dispatch(changeSearchAction(res.data.result.songs))
    dispatch(changeSearchLoading(false))
  } catch (error) {
    console.log(error)
  }
}

export const changeHotSearch = async (dispatch) => {
  try {
    let res = await getHotSearch()
    dispatch(changeHotSearchAction(res.data.result.hots))
  } catch (error) {
    console.log(error)
  }
}

export const changeDefault = async (dispatch) => {
  try {
    let res = await getDefaultSearch()
    dispatch(changeDefaultAction(res.data.data.showKeyword))
  } catch (error) {
    console.log(error)
  }
}

export const changeSearchSuggest = async (param, dispatch) => {
  try {
    let res = await getSearchSuggest(param)
    dispatch(changeSearchSuggestAction(res.data.result.allMatch))
    dispatch(changeSearchLoading(false))
  } catch (error) {
    console.log(error)
  }
}