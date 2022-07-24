import {fromJS} from 'immutable'
import {getRankListRequest} from '../../../api/request'
const initState = fromJS({
    rankList : [],
    loading : true,
})
export const CHANGE_RANK_LIST = '/home/rank/CHANGE_RANK_LIST'
export const CHANGE_LOADDING = '/home/rank/CHANGE_LOADING'

const changeRankList = (data) => {
    return {
        type:CHANGE_RANK_LIST,
        data : fromJS(data)
    }
}
export const changeLoading = (data)=> {
    return {
        type : CHANGE_LOADDING,
        data
    }
}

export const getRankList = () => {
    return function (dispatch) {
        getRankListRequest().then(res => {
            let list = res.data.list
            dispatch(changeRankList(list))
            dispatch(changeLoading(false))
        })
    }
}



export  function reducer(state = initState ,action) {
  switch (action.type) {
    case CHANGE_RANK_LIST : 
    return state.set('rankList',action.data)
    case CHANGE_LOADDING : 
    return state.set('loading',action.data)
    default:
       return state
  }
}
