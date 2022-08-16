import React, { useEffect, useState } from 'react';
import Horizon from '../../baseUI/Horizen-item';
import { NavContainer, List, ListItem, ListContainer } from "./style";
import { alphaTypes, categoryTypes } from '../../api/utils'
import {
  getSingerList,
  getHotSingerList,
  changeEnterLoading,
  changePageCount,
  changePullDownGetSinger,
  changePullUpGetSinger
} from './store/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Outlet } from 'react-router-dom'
import Loading2 from '../../components/Loading2'
import { motion } from 'framer-motion'
import BS from '../../components/BS';
import { memo } from 'react';
import { message } from 'antd';
function Singers() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let [category, setCategory] = useState('')//字母
  let [alpha, setAlpha] = useState('')//歌曲风格
  
  const {singerList , enterLoading ,currentSongStatus ,pageCount} = useSelector(state => {
    return {
      singerList: state.singers.get("singerList").toJS(),
      enterLoading: state.singers.get('enterLoading'),
      pageCount : state.singers.get('pageCount'),
      currentSongStatus: state.player.toJS().currentSong.id
    }
  })
  useEffect(() => {
    getHotSingerList(dispatch)//页面第一次加载的获取歌手数据
    return () => {
      dispatch(changeEnterLoading(true))
    }
  }, [])



  function updateDispatch(category, alpha) {
    dispatch(changePageCount(0))//查看特定类型的歌手，所以讲数据清零
    dispatch(changeEnterLoading(true))//因为要请求新的数据，所以改变loading逻辑
    dispatch(getSingerList(category, alpha))
  }


  let handleUpdateAlpha = (val) => {//改变展示页,字母分类
    setAlpha(val)
    updateDispatch(alpha, val);
  }

  let handleUpdateCatetory = (val) => {//改变展示页，音乐风格分类
    message.error('暂时不可用')
    // setCategory(val)
    // updateDispatch(category, val);
  }

  const enterDetail = (id) => {
    navigate(`/singer/${id}`)
  }

  const renderSingerList = () => {
    return (
      <List>
        {
          singerList.map((item, index) => {
            return (
              <ListItem key={item.accountId + "" + index} onClick={() => enterDetail(item.id)}>
                <div className="img_wrapper">
                  <img src={`${item.picUrl}?param=300x300`} loading="lazy" width="100%" height="100%" alt="music" />
                </div>
                <span className="name">{item.name}</span>
              </ListItem>
            )
          })
        }
      </List>
    )
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <NavContainer>
        <Horizon
          list={categoryTypes}
          title={"分类 (默认热门):"}
          handleClick={handleUpdateCatetory}
          oldVal={category}>
        </Horizon>
        <Horizon
          list={alphaTypes}
          title={"首字母:"}
          handleClick={val => handleUpdateAlpha(val)}
          oldVal={alpha}>
        </Horizon>
      </NavContainer>
      {enterLoading ? <Loading2 /> :
        <ListContainer currentSongStatus={currentSongStatus}>
          <BS 
          isPullDown={true}
          isPullUp={true}
          pageCount={pageCount}
          changePullDownGetSinger={changePullDownGetSinger}
          changePullUpGetSinger={changePullUpGetSinger}
          >
            {renderSingerList()}
          </BS>
        </ListContainer>
      }

      <Outlet />
    </motion.div>
  )
}

export default memo(Singers)