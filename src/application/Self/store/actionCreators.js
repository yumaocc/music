import {
    getUserDetail,
    getUserFans,
    getUserFollowes,
    getUserEvent, 
    getUserSongList,
    getUserPlaySongList
} from '../../../api/request'
import { fromJS } from 'immutable'
import {
    SELF_USER_DETAIL,
    SELF_USER_FANS_NUM,
    SELF_USER_FOLLOWS_NUM,
    SELF_USER_EVENT,
    SELF_USER_LOAD,
    SELF_USER_COMMENT,
    SELF_USER_SONG_LIST,
    SELF_USER_SONG_PLAY_LIST
} from './actionTypes'


//action函数
export const userDetailAction = (data) => {
    return {
        type: SELF_USER_DETAIL,
        data: fromJS(data)
    }
}
export const userFansNumAction = (data) => {
    return {
        type: SELF_USER_FANS_NUM,
        data
    }
}
export const userFollowsNumAction = (data) => {
    return {
        type: SELF_USER_FOLLOWS_NUM,
        data
    }
}
export const getUserEventAction = (data) => {
    return {
        type: SELF_USER_EVENT,
        data: fromJS(data)
    }
}
export const getUserLoad = (data) => {
    return {
        type: SELF_USER_LOAD,
        data
    }
}
export const getUserCommentAction = (data) => {
    return {
        type: SELF_USER_COMMENT,
        data: fromJS(data)
    }
}
export const userSongListAction = (data) => {
    return {
        type : SELF_USER_SONG_LIST,
        data:fromJS(data)
    }
}

export const userPlaySongList = (data) => {
    return {
        type : SELF_USER_SONG_PLAY_LIST,
        data : fromJS(data)
    }
}


//请求函数
export const changeUserDetail = async (id, dispatch) => {
    let res = await getUserDetail(id)
    dispatch(userDetailAction(res.data))
}

export const changeUserFansNum = async (id, dispatch) => {
    try {
        let res = await getUserFans(id)
        dispatch(userFansNumAction(res.data.size))
    } catch (error) {
        console.log(error)
    }
}

export const changeUserFoolowsNum = async (id, dispatch) => {
    try {
        let res = await getUserFollowes(id)
        dispatch(userFollowsNumAction(res.data.follow.length))
    } catch (error) {
        console.log(error)
    }
}

export const changeUserEvent = async (id, dispatch) => {
    try {
        let res = await getUserEvent(id)
        dispatch(getUserEventAction(res.data.events))
    } catch (error) {
        console.log(error)
    }
}
export const changeUserSongList = async (id ,dispatch) => {
    try {
        let res = await getUserSongList(id)
        dispatch(userSongListAction(res.data.playlist))
    } catch (error) {
        console.log(error)
    }
}
export const changeUserSongPlayList = async ( id ,dispatch) => {
    try {
        let res = await getUserPlaySongList(id)
        dispatch(userPlaySongList(res.data.allData))
    } catch (error) {
        
    }
}

