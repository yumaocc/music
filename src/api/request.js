import api from './config'

 const getBannerRequest = () => {
    return api.get('/banner')
}
 const getRecommendListRequest = () =>{
    return api.get('/personalized')
}
const  getHotSingerListRequest = (count) =>{
    return api.get(`/top/artists?offset=${count}`)
}
 const getSingerListRequest= (category, alpha, count) => {//按字母挑选歌手
    return api.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
  }
const getRankListRequest = () => {//排行版
    return api.get(`/toplist/detail`)
}
const getAlbumDetailRequest = (id) => {//详情页歌单
    return api.get(`/playlist/detail?id=${id}`)
}
export const getSingerInfoRequest = id => { //歌手歌曲
    return api.get (`/artists?id=${id}`);
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
export const getSearchSuggest = (prams)=> {//推荐搜索
    return api.get(`/search/suggest?keywords=${prams}&type=mobile`)
}
export {
    getBannerRequest,
    getRecommendListRequest,
    getHotSingerListRequest,
    getSingerListRequest,
    getRankListRequest,
    getAlbumDetailRequest,
    
}