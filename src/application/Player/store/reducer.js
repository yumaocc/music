import {
    SET_CURRENT_SONG,
    SET_FULL_SCREEN,
    SET_PLAYING_STATE,
    SET_SEQUENCE_PLAYLIST,
    SET_PLAYLIST,
    SET_PLAY_MODE,
    SET_CURRENT_INDEX,
    SET_SHOW_PLAYLIST,
    DELETE_PLAY_LIST_SONG,
} from './actionTypes'
import { fromJS } from 'immutable';

const initState = fromJS({
    fullScreen: false,// 播放器是否为全屏模式
    playing: false, // 当前歌曲是否播放
    sequencePlayList: [
        {
            ftype: 0,
            djId: 0,
            a: null,
            cd: '01',
            crbt: null,
            no: 1,
            st: 0,
            rt: '',
            cf: '',
            alia: [
                '手游《梦幻花园》苏州园林版推广曲'
            ],
            rtUrls: [],
            fee: 0,
            s_id: 0,
            copyright: 0,
            h: {
                br: 320000,
                fid: 0,
                size: 9400365,
                vd: -45814
            },
            mv: 0,
            al: {
                id: 2342324,
                name: '拾梦纪',
                picUrl: 'http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg',
                tns: [],
                pic_str: '109951164627180052',
                pic: 109951164627180050
            },
            name: '拾梦纪',
            l: {
                br: 128000,
                fid: 0,
                size: 3760173,
                vd: -41672
            },
            rtype: 0,
            m: {
                br: 192000,
                fid: 0,
                size: 5640237,
                vd: -43277
            },
            cp: 1416668,
            mark: 0,
            rtUrl: null,
            mst: 9,
            dt: 234947,
            ar: [
                {
                    id: 12084589,
                    name: '妖扬',
                    tns: [],
                    alias: []
                },
                {
                    id: 12578371,
                    name: '金天',
                    tns: [],
                    alias: []
                }
            ],
            pop: 5,
            pst: 0,
            t: 0,
            v: 3,
            id: 1416767593,
            publishTime: 0,
            rurl: null
        }
    ], // 顺序列表 
    playList: [
        {
            ftype: 0,
            djId: 0,
            a: null,
            cd: '01',
            crbt: null,
            no: 1,
            st: 0,
            rt: '',
            cf: '',
            alia: [
                '手游《梦幻花园》苏州园林版推广曲'
            ],
            rtUrls: [],
            fee: 0,
            s_id: 0,
            copyright: 0,
            h: {
                br: 320000,
                fid: 0,
                size: 9400365,
                vd: -45814
            },
            mv: 0,
            al: {
                id: 2342324,
                name: '拾梦纪',
                picUrl: 'http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg',
                tns: [],
                pic_str: '109951164627180052',
                pic: 109951164627180050
            },
            name: '拾梦纪',
            l: {
                br: 128000,
                fid: 0,
                size: 3760173,
                vd: -41672
            },
            rtype: 0,
            m: {
                br: 192000,
                fid: 0,
                size: 5640237,
                vd: -43277
            },
            cp: 1416668,
            mark: 0,
            rtUrl: null,
            mst: 9,
            dt: 234947,
            ar: [
                {
                    id: 12084589,
                    name: '妖扬',
                    tns: [],
                    alias: []
                },
                {
                    id: 12578371,
                    name: '金天',
                    tns: [],
                    alias: []
                }
            ],
            pop: 5,
            pst: 0,
            t: 0,
            v: 3,
            id: 1416767593,
            publishTime: 0,
            rurl: null
        }
    ],//播放列表
    mode: 1,// 播放模式
    currentIndex: 0,// 当前歌曲在播放列表的索引位置
    showPlayList: false,// 是否展示播放列表
    currentSong: {//当前歌曲
        ftype: 0,
        djId: 0,
        a: null,
        cd: '01',
        crbt: null,
        no: 1,
        st: 0,
        rt: '',
        cf: '',
        alia: [
            '手游《梦幻花园》苏州园林版推广曲'
        ],
        rtUrls: [],
        fee: 0,
        s_id: 0,
        copyright: 0,
        h: {
            br: 320000,
            fid: 0,
            size: 9400365,
            vd: -45814
        },
        mv: 0,
        al: {
            id: 2342324,
            name: '拾梦纪',
            picUrl: 'http://p1.music.126.net/M19SOoRMkcHmJvmGflXjXQ==/109951164627180052.jpg',
            tns: [],
            pic_str: '109951164627180052',
            pic: 109951164627180050
        },
        name: '拾梦纪',
        l: {
            br: 128000,
            fid: 0,
            size: 3760173,
            vd: -41672
        },
        rtype: 0,
        m: {
            br: 192000,
            fid: 0,
            size: 5640237,
            vd: -43277
        },
        cp: 1416668,
        mark: 0,
        rtUrl: null,
        mst: 9,
        dt: 234947,
        ar: [
            {
                id: 12084589,
                name: '妖扬',
                tns: [],
                alias: []
            },
            {
                id: 12578371,
                name: '金天',
                tns: [],
                alias: []
            }
        ],
        pop: 5,
        pst: 0,
        t: 0,
        v: 3,
        id: 1416767593,
        publishTime: 0,
        rurl: null
    }
});

export default (state = initState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return state.set('currentSong', action.data);
        case SET_FULL_SCREEN:
            return state.set('fullScreen', action.data);
        case SET_PLAYING_STATE:
            return state.set('playing', action.data);
        case SET_SEQUENCE_PLAYLIST:
            return state.set('sequencePlayList',action.data);
        case SET_PLAYLIST:
            return state.set('playList',action.data)
        case SET_PLAY_MODE:
            return state.set('mode', action.data);
        case SET_CURRENT_INDEX:
            return state.set('currentIndex', action.data);
        case SET_SHOW_PLAYLIST:
            return state.set('showPlayList', action.data);
        case DELETE_PLAY_LIST_SONG : 
            let list = state.get('playList').toJS()
            let newList = list.filter(item => item.id !== action.data)
            console.log(newList.length,'ddd')
            return state.set('playList',fromJS(newList))
        default:
            return state;
    }
}