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
import { fromJS } from 'immutable'


const changeCurrentSong = (data) => ({
  type: SET_CURRENT_SONG,
  data: fromJS(data)
});

const changeFullScreen = (data) => ({
  type: SET_FULL_SCREEN,
  data
});

const changePlayingState = (data) => ({
  type: SET_PLAYING_STATE,
  data
});

const changeSequencePlayList = (data) => {
console.log(11)
  return ({
    type: SET_SEQUENCE_PLAYLIST,
    data: fromJS(data)
  });
}
const changePlayList = (data) => {
  if(Array.isArray(data)) {
    return ({
      type: SET_PLAYLIST,
      data: fromJS(data)
    });
  } else {
    return ({
      type: SET_PLAYLIST,
      data: fromJS([data])
    });
  }
}

const changePlayMode = (data) => {
  return ({
    type: SET_PLAY_MODE,
    data: fromJS(data)
  });
}

const changeCurrentIndex = (data) => ({
  type: SET_CURRENT_INDEX,
  data
});

const changeShowPlayList = (data) => ({
  type: SET_SHOW_PLAYLIST,
  data
});
const deleteSong = (data) => {
  return {
    type:DELETE_PLAY_LIST_SONG,
    data:data
  }
}
export {
  changeCurrentSong,
  changeFullScreen,
  changePlayingState,
  changeSequencePlayList,
  changePlayList,
  changePlayMode,
  changeCurrentIndex,
  changeShowPlayList,
  deleteSong,
}