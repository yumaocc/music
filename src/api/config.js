import axios from 'axios'

 const instance = axios.create({
    baseURL: "https://nodejs-amber.vercel.app",
    // baseURL: "http://localhost:3000",
})
// http://localhost:3000//user/playlist?uid=




instance.interceptors.request.use(function (res) {
    return res
}, function (err) {
    return Promise.reject(err)
})

instance.interceptors.response.use(function (res) {
    return res
},function (err) {
    return Promise.reject('请求错误',err)
})
export default instance
export const RankTypes = {
    "0": "云音乐新歌榜",
    "1": "云音乐热歌榜",
    "2": "网易原创歌曲榜",
    "3": "云音乐飙升榜",
    "4": "云音乐国电榜",
    "5": "UK排行榜周榜",
    "6": "美国Billboard周榜",
    "7": "KTV唛榜",
    "8": "iTunes榜",
    "9": "Hit FM Top榜",
    "10": "日本Oricon周榜",
    "11": "韩国Melon排行榜周榜",
    "12": "韩国Mnet排行榜周榜",
    "13": "韩国Melon原声周榜",
    "14": "中国TOP排行榜（港台榜）",
    "15": "中国TOP排行榜（内地榜）",
    "16": "香港电台中文歌曲龙虎榜",
    "17": "华语金曲榜",
    "18": "中国嘻哈榜",
    "19": "法国 NRJ Vos Hits 周榜",
    "20": "台湾Hito排行榜",
    "21": "Beatport全球电子舞曲榜",
    "22": "云音乐ACG音乐榜",
    "23": "江小白YOLO云音乐说唱榜"
  };

  

  export const playMode = {
    sequence: 0,
    loop: 1,
    random: 2
  };
  