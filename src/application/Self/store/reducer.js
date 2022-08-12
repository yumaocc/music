import { fromJS } from "immutable";
import {
    SELF_USER_DETAIL,
    SELF_USER_ACCOUNT,
    SELF_USER_FANS_NUM,
    SELF_USER_FOLLOWS_NUM,
    SELF_USER_EVENT,
    SELF_USER_LOAD,
    SELF_USER_SONG_LIST,
    SELF_USER_SONG_PLAY_LIST
    
} from './actionTypes'
const initState = fromJS({
    userDetail: {
        profile: {
            backgroundUrl: '',
            nickname: '',
            avatarUrl: '',
            city: '',
            birthday: '',
            province: ''
        },
        level: 0,
        createDays: 0,
        listenSongs: 0
    },
    fans: '',//粉丝数
    follow: '',//关注数
    event: '',//用户动态
    load: false,
    userSongPlayList: [

    ],
    userAllSongPlayList :[

    ]//用户最近听过的所有歌
})

export default function reducer(state = initState, action) {
    switch (action.type) {
        case SELF_USER_DETAIL:
            return state.set('userDetail', action.data)
        case SELF_USER_ACCOUNT:
            return state.set('account', action.data)
        case SELF_USER_FANS_NUM:
            return state.set('fans', action.data)
        case SELF_USER_FOLLOWS_NUM:
            return state.set('follow', action.data)
        case SELF_USER_EVENT:
            return state.set('event', action.data)
        case SELF_USER_LOAD:
            return state.set('load', action.data)
        case SELF_USER_SONG_LIST : 
            return state.set('userSongPlayList',action.data)
        case SELF_USER_SONG_PLAY_LIST : 
        console.log('reducer',action.data)
        return state.set('userAllSongPlayList',action.data)
        default:
            return state
    }
}