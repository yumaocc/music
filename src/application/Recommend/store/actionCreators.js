import * as actionTypes from './constants';
import { fromJS } from 'immutable';
import { getBannerRequest, getRecommendListRequest } from '../../../api/request';

export const changeBannerList = (data) => ({
    type: actionTypes.CHANGE_BANNER,
    data: fromJS (data)
  });

  export const changeRecommendList = (data) => ({
    type: actionTypes.CHANGE_RECOMMEND_LIST,
    data: fromJS (data)
  });//上面两个函数负责将请求回来的数据转换成action对象

  export const changeEnterLoading = (data) => ({
    type : actionTypes.CHANGE_ENTER_LOADING,
    data : data
  })
  export const getBannerList = () => {
    return (dispatch) => {
      getBannerRequest ().then (data => {
        dispatch (changeBannerList(data.data.banners));
      }).catch ((err) => {
        console.log ("轮播图数据传输错误",err);
      }) 
    }
  };
  
  export const getRecommendList = () => {
    return (dispatch) => {
      getRecommendListRequest ().then (data => {
        dispatch (changeRecommendList (data.data.result));
        dispatch(changeEnterLoading(false))
      }).catch (() => {
        console.log ("推荐歌单数据传输错误");
      });
    }
  };//这两个函数负责将发请求，并将数据传送给store