import { RankTypes } from "./config";
const getCount = (count) => {
  if (count < 0) return;
  if (count < 10000) {
    return count;
  } else if (Math.floor(count / 10000) < 10000) {
    return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 10000000) / 10 + "亿";
  }
}//播放量函数

//歌手栏数据 和字母
const categoryTypes = [{
  name: "华语男",
  key: "1001"
},
{
  name: "华语女",
  key: "1002"
},
{
  name: "华语组合",
  key: "1003"
},
{
  name: "欧美男",
  key: "2001"
},
{
  name: "欧美女",
  key: "2002"
},
{
  name: "欧美组合",
  key: "2003"
},
{
  name: "日本男",
  key: "6001"
},
{
  name: "日本女",
  key: "6002"
},
{
  name: "日本组合",
  key: "6003"
},
{
  name: "韩国男",
  key: "7001"
},
{
  name: "韩国女",
  key: "7002"
},
{
  name: "韩国组合",
  key: "7003"
},
{
  name: "其他男歌手",
  key: "4001"
},
{
  name: "其他女歌手",
  key: "4002"
},
{
  name: "其他组合",
  key: "4003"
},
];

// 歌手首字母
const alphaTypes = [{
  key: "A",
  name: "A"
},
{
  key: "B",
  name: "B"
},
{
  key: "C",
  name: "C"
},
{
  key: "D",
  name: "D"
},
{
  key: "E",
  name: "E"
},
{
  key: "F",
  name: "F"
},
{
  key: "G",
  name: "G"
},
{
  key: "H",
  name: "H"
},
{
  key: "I",
  name: "I"
},
{
  key: "J",
  name: "J"
},
{
  key: "K",
  name: "K"
},
{
  key: "L",
  name: "L"
},
{
  key: "M",
  name: "M"
},
{
  key: "N",
  name: "N"
},
{
  key: "O",
  name: "O"
},
{
  key: "P",
  name: "P"
},
{
  key: "Q",
  name: "Q"
},
{
  key: "R",
  name: "R"
},
{
  key: "S",
  name: "S"
},
{
  key: "T",
  name: "T"
},
{
  key: "U",
  name: "U"
},
{
  key: "V",
  name: "V"
},
{
  key: "W",
  name: "W"
},
{
  key: "X",
  name: "X"
},
{
  key: "Y",
  name: "Y"
},
{
  key: "Z",
  name: "Z"
}
];

const filterIndex = rankList => {
  for (let i = 0; i < rankList.length - 1; i++) {
    if (rankList[i].tracks.length && !rankList[i + 1].tracks.length) {
      return i + 1;
    }
  }
};
const filterIdx = name => {
  for (var key in RankTypes) {
    if (RankTypes[key] === name) return key;
  }
  return null;
};

const currentAlbum = {
  creator: {
    avatarUrl: "http://p1.music.126.net/O9zV6jeawR43pfiK2JaVSw==/109951164232128905.jpg",
    nickname: "浪里推舟"
  },
  coverImgUrl: "http://p2.music.126.net/ecpXnH13-0QWpWQmqlR0gw==/109951164354856816.jpg",
  subscribedCount: 2010711,
  name: "听完就睡，耳机是天黑以后柔软的梦境",
  tracks: [
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
    {
      name: "我真的受伤了",
      ar: [{ name: "张学友" }, { name: "周华健" }],
      al: {
        name: "学友 热"
      }
    },
  ]
}
const getName = list => {
  let str = "";
  list.map((item, index) => {
    str += index === 0 ? item.name : "/" + item.name;
    return item;
  });
  return str;
};
const artist = {
  picUrl: "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
  name: "薛之谦",
  hotSongs: [
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    {
      name: "我好像在哪见过你",
      ar: [{ name: "薛之谦" }],
      al: {
        name: "薛之谦专辑"
      }
    },
    // 省略 20 条
  ]
}

const getAlbumName = (array) => {
  let result = ''
  for (let i = 0; i < array.length; i++) {
    const element = array[i].name;
    result.length === 0 ? result += element : result += '/' + element
  }
  return result
}
const getSongUrl = id => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

const convertedTime = (value) => {
  if (value >= 60) {
    let f = parseInt(value / 60)
    let m = parseInt((value % 60))
    if (m < 10) {
      m = `0${m}`
    }
    return `0${f}:${m}`
  }
  if (value >= 10) {
    return `00:${parseInt(value)}`
  }
  return `00:0${parseInt(value)}`
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// 随机算法
function shuffle(arr) {
  let new_arr = [];
  arr.forEach(item => {
    new_arr.push(item);
  });
  for (let i = 0; i < new_arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = new_arr[i];
    new_arr[i] = new_arr[j];
    new_arr[j] = t;
  }
  return new_arr;
}

// 找到当前的歌曲索引
const findIndex = (song, list) => {
  return list.findIndex(item => {
    return song.id === item.id;
  });
};
//防抖
const debounce = (callback, delay) => {
  let time = null
  return () => {
    if (time !== null) {
      clearTimeout(time)
    }
    time = setTimeout(() => {
      callback()
    }, delay)
  }
}
const getConstellation = (birthday, dayjs) => {//获取星座
  let time = dayjs(birthday)
  let day = time.$D
  let month = time.$M - 1
  let year = time.$y + ''
  let s = "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯"
  let m = year[3] < 5 ? 0 : 5
  let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22]
  return ` ${year[1] + m}后 ${s.substr(month * 2 - (day < arr[month - 1] ? 2 : 0), 2)}座`
}
const getYear = (dayjs, createTime) => {
  let newDate = dayjs().format()
  let newYear = newDate.slice(0, 4)
  let oldYear = dayjs(createTime).$y
  return newYear - oldYear
}
const selfMock_A = [
  {
    icon:'',
    name:'我的消息'
  },
  {
    icon:'',
    name:'云贝中心'
  },
  {
    icon:'',
    name:'创作者中心'
  },
]
const selfMock_B = [
  {
    icon:'',
    name:'云村有票'
  },
  {
    icon:'',
    name:'商城'
  },
  {
    icon:'',
    name:'多多西西口袋'
  },
  {
    icon:'',
    name:'Beat交易平台'
  },
  {
    icon:'',
    name:'游戏专区'
  },
  {
    icon:'',
    name:'口袋彩铃'
  },
]
const selfMock_C = [
  {
    icon:'',
    name:'设置'
  },
  {
    icon:'',
    name:'深色模式'
  },
  {
    icon:'',
    name:'定时关闭'
  },
  {
    icon:'',
    name:'个性装扮'
  },
  {
    icon:'',
    name:'边听边存'
  },
  {
    icon:'',
    name:'在线听歌免流量'
  },
  {
    icon:'',
    name:'音乐黑名单'
  },
  {
    icon:'',
    name:'青少年模式'
  },
  {
    icon:'',
    name:'音乐闹钟'
  },
]
const selfMock_D = [
  {
    icon:'',
    name:'我的订单'
  },
  {
    icon:'',
    name:'优惠券'
  },
  {
    icon:'',
    name:'我的客服'
  },
  {
    icon:'',
    name:'分享网易云音乐'
  },
  {
    icon:'',
    name:'个人信息收集与使用清单'
  },
  {
    icon:'',
    name:'个人信息第三方共享清单'
  },
  {
    icon:'',
    name:'个人信息与隐私保护'
  },
  {
    icon:'',
    name:'关于'
  },
]

export {
  alphaTypes,
  categoryTypes,
  getCount,
  filterIndex,
  filterIdx,
  currentAlbum,
  getName,
  artist,
  getAlbumName,
  getSongUrl,
  convertedTime,
  shuffle,
  findIndex,
  debounce,
  getConstellation,
  getYear,
  selfMock_A,
  selfMock_B,
  selfMock_C,
  selfMock_D,

}