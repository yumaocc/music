import { CHANGE_CURRENT_ALBUM, CHANGE_ENTER_LOADING ,ADD_SONG_PLAY_LIST ,DELETE_LIST} from './constants'
import { fromJS } from 'immutable'
import { getAlbumDetailRequest } from '../../../api/request'
export const changeCurrentAlbum = (data) => {
    return {
        type: CHANGE_CURRENT_ALBUM,
        data: fromJS(data)
    }
}
export const changeEnterLoading = (data) => {
    return {
        type: CHANGE_ENTER_LOADING,
        data:fromJS(data)
    }
}
const addSongPlayList = (data) => {
    return {
        type:ADD_SONG_PLAY_LIST,
        data:fromJS(data)
    }
}
const deleteList = () => {
    return  {
        type:DELETE_LIST,
        data:{}
    }
}
export function getAlbum(id,dispatch ,cookie) {
    getAlbumDetailRequest(id ,cookie).then(res => {
        let data = res.data.playlist;
        dispatch(changeCurrentAlbum(data))
        dispatch(changeEnterLoading(false))
    }).catch(err => {
        console.log('获取album失败', err)
    })
}

export function addSongInPlayList(data ,dispatch){
    dispatch(addSongInPlayList(data))
}
export function deletePlayList (dispatch) {
    dispatch(deleteList())
}