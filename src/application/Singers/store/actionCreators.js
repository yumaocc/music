import {
  getHotSingerListRequest,
  getSingerListRequest
} from "../../../api/request";
import {
  CHANGE_SINGER_LIST,
  CHANGE_PAGE_COUNT,
  CHANGE_ENTER_LOADING,
  CHANGE_PULLUP
} from './constants';
import { fromJS } from 'immutable';


const changeSingerList = (data) => ({
  type: CHANGE_SINGER_LIST,
  data: fromJS(data)
});

export const changePageCount = (data) => ({
  type: CHANGE_PAGE_COUNT,
  data
});

//进场loading
export const changeEnterLoading = (data) => ({
  type: CHANGE_ENTER_LOADING,
  data
});

export const changePullUp = (data) => {
  return {
    type : CHANGE_PULLUP,
    data:fromJS(data)
  }
}





//第一次加载热门歌手
export const getHotSingerList = async (dispatch) => {
  try {
    let res = await getHotSingerListRequest(0)
    dispatch(changeSingerList(res.data.artists))
    dispatch(changeEnterLoading(false))
  } catch (error) {
    console.log(error)
  }
}


export const changePullDownGetSinger = async (dispatch) => {
  try {
    let res = await getHotSingerListRequest(parseInt(Math.random() * 50))
    dispatch(changeSingerList(res.data.artists))
    dispatch(changeEnterLoading(false))
  } catch (error) {
    console.log(error)
  }
}
export const changePullUpGetSinger = async (count, dispatch) => {
  try {
    let res = await getHotSingerListRequest(count)
    dispatch(changePullUp(res.data.artists))
    dispatch(changeEnterLoading(false))
    dispatch(changePageCount(count))
  } catch (error) {
    console.log(error)
  }
}
//加载更多热门歌手
export const refreshMoreHotSingerList = () => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getHotSingerListRequest(pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      console.log('热门歌手数据', data)
      dispatch(changeSingerList(data));
      // dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('热门歌手数据获取失败');
    });
  }
};

//第一次加载对应类别的歌手
export const getSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    getSingerListRequest(category, alpha, 1).then(res => {
      const data = res.data.artists;
      console.log(res)
      dispatch(changeSingerList(data));
      dispatch(changeEnterLoading(false));
      // dispatch(changePullDownLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};

//加载更多歌手
export const refreshMoreSingerList = (category, alpha) => {
  return (dispatch, getState) => {
    const pageCount = getState().getIn(['singers', 'pageCount']);
    const singerList = getState().getIn(['singers', 'singerList']).toJS();
    getSingerListRequest(category, alpha, pageCount).then(res => {
      const data = [...singerList, ...res.artists];
      dispatch(changeSingerList(data));
      // dispatch(changePullUpLoading(false));
    }).catch(() => {
      console.log('歌手数据获取失败');
    });
  }
};