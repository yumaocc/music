
import api from './config'

const getBannerRequest = () => {
    return api.get('/banner')
}
const getRecommendListRequest = () => {
    return api.get('/personalized')
}
const getHotSingerListRequest = (count) => {
    return api.get(`/top/artists?offset=${count}`)
}
const getSingerListRequest = (category, alpha, count) => {//按字母挑选歌手
    return api.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}
const getRankListRequest = () => {//排行版
    return api.get(`/toplist/detail`)
}
const getAlbumDetailRequest = (id) => {//详情页歌单
    return api.get(`/playlist/detail?id=${id}`)
}
export const getSingerInfoRequest = id => { //歌手歌曲
    return api.get(`/artists?id=${id}`);
};
export const getSearchRequest = (prams) => {//搜索结果
    return api.get(`/cloudsearch?keywords=${prams}`)
}
export const getHotSearch = () => {//热面搜索
    return api.get('/search/hot')
}
export const getDefaultSearch = () => {//默认搜索
    return api.get('/search/default')
}
export const getSearchSuggest = (prams) => {//推荐搜索
    return api.get(`/search/suggest?keywords=${prams}&type=mobile`)
}
export const getQRcode = () => {//获取生成二维码的Key
   return  api.get(`/login/qr/key?timerstamp=${Date.now()}`)
}
export const getQRcodeImage = (key) => {//获取二维码
    return api.get(`/login/qr/create/?key=${key}&qrimg=true&timerstamp=${Date.now()}`)
}
export const checkQRcodeStatus = (key) => {//检查二维码
    return api.get(`/login/qr/check?key=${key}&timerstamp=${Date.now()}`)
}

export const checkLoginStatus = (cookie) => {//检查登录状态
    return api({
        url: `/login/status?timerstamp=${Date.now()}`,
        method: 'post',
        data: {
          cookie,
        },
      })
}
export const getUserDetail = (id) => {//获取用户详细信息
    return api(`http://localhost:3000/user/detail?uid=${id}`)
}
export const getHistoryComment = (id,cookie) => {//获取用户评论
    return api.get(`/user/comment/history?uid=${id}&cookie=${cookie}`)
}
export const getUserFans = (id) => {//获取用户粉丝列表
    return api.get(`/user/followeds?uid=${id}`)
}

export const getCity = (keywords) => {//获取地区
    return api.get(`https://restapi.amap.com/v3/config/district?keywords=${keywords}&subdistrict=2&key=dea5e59cb44f1395f66235088dc582d2`)
}
export const getUserFollowes = (id) => { //获取用户关注
    return api.get(`/user/follows?uid=${id}`)
}
export const getUserEvent = (id) => {//获取用户动态
    return api.get(`/user/event?uid=${id}`)
}
export const getSubCount = (cookie)=> {
    return api.get(`/user/subcount?cookie=${cookie}`)
}
export const getUserPlayList = (id) => {
    return api.get(`/user/playlist?uid=${id}`)
}
export const getUserSongList = (id) => {//用户歌单
    return api.get(`/user/playlist?uid=${id}`)
}
export const getUserPlaySongList = (id) => {//用户播放记录
    return api.get(`/user/record?uid=${id}&type=0`)
}

export {
    getBannerRequest,
    getRecommendListRequest,
    getHotSingerListRequest,
    getSingerListRequest,
    getRankListRequest,
    getAlbumDetailRequest,
}