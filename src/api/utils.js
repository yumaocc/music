import { RankTypes } from "./config";
 const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
      return count;
    } else if (Math.floor (count / 10000) < 10000) {
      return Math.floor (count/1000)/10 + "万";
    } else  {
      return Math.floor (count / 10000000)/ 10 + "亿";
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
      if (rankList [i].tracks.length && !rankList [i + 1].tracks.length) {
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
    tracks:[
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
      {
        name: "我真的受伤了",
        ar: [{name: "张学友"}, {name: "周华健"}],
        al: {
          name: "学友 热"
        }
      },
    ]
  }
 const getName = list => {
    let str = "";
    list.map ((item, index) => {
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
        ar: [{name: "薛之谦"}],
        al: {
          name: "薛之谦专辑"
        }
      },
      {
        name: "我好像在哪见过你",
        ar: [{name: "薛之谦"}],
        al: {
          name: "薛之谦专辑"
        }
      },
      // 省略 20 条
    ]
  }

  const getAlbumName =(array) => {
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
    if(value >= 60) {
        let f = parseInt(value /60)
        let m = parseInt((value % 60))
        if(m <10 ) {
            m = `0${m}`
        }
        return `0${f}:${m}`
    }
    if(value >= 10) {
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
      if(time !== null) {
          clearTimeout(time)
      }
      time = setTimeout(()=>{
          callback()
      },delay)
  }
}

  
  export {
    alphaTypes,
    categoryTypes,
    getCount,
    filterIndex,
    filterIdx ,
    currentAlbum,
    getName ,
    artist,
    getAlbumName,
    getSongUrl,
    convertedTime,
    shuffle,
    findIndex,
    debounce,
   

  }