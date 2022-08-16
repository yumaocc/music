import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRankList, changeLoading } from './store/index'
import { filterIndex } from '../../api/utils'
import { Container, List, ListItem, SongList } from './style'
import { useNavigate, Outlet } from 'react-router-dom'
import Loading2 from '../../components/Loading2'
import { motion } from 'framer-motion'
import BS from '../../components/BS'
import { memo } from 'react'
 function Rank() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    getRankList()(dispatch)
    return () => {
      dispatch(changeLoading(true))
    }
  }, [])
  const { rankList, loading ,playerStatus} = useSelector(state => {
    return {
      rankList: state.rank.get("rankList").toJS(),
      loading: state.rank.get("loading"),
      playerStatus:state.player.toJS().currentSong.id
    }
  })
  let globalStartIndex = filterIndex(rankList);
  let officialList = rankList.slice(0, globalStartIndex);
  let globalList = rankList.slice(globalStartIndex);
  const enterDetail = (id) => {
    navigate(`/recommend/album/${id}`)
  }

  const RenderRankList = (list, global) => {
    return (
      <List globalRank={global}>
        {
          list.map((item) => {
            return (
              <ListItem key={item.id} tracks={item.tracks} onClick={() => enterDetail(item.id)}>
                <div className="img_wrapper">
                  <img src={item.coverImgUrl} alt="" />
                  <div className="decorate"></div>
                  <span className="update_frequecy">{item.updateFrequency}</span>
                </div>
                {RenderSongList(item.tracks)}
              </ListItem>
            )
          })
        }
      </List>
    )
  }

  const RenderSongList = (list) => {
    return list.length ? (
      <SongList>
        {
          list.map((item, index) => {
            return <li key={index}>{index + 1}. {item.first} - {item.second}</li>
          })
        }
      </SongList>
    ) : null;
  }

  // 榜单数据未加载出来之前都给隐藏
  let displayStyle = loading ? { "display": "none" } : { "display": "" };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {
        loading ? <Loading2 /> :
          <Container playerStatus={playerStatus}> 
            <BS>
              <h1 className="offical" style={displayStyle}> 官方榜 </h1>
              {RenderRankList(officialList)}
              <h1 className="global" style={displayStyle}> 全球榜 </h1>
              {RenderRankList(globalList, true)}
            </BS>
            <Outlet />
          </Container>
      }
    </motion.div>
  );
}


export default memo(Rank)