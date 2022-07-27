import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRankList, changeLoading } from './store/index'
import { filterIndex, filterIdx } from '../../api/utils'
import { Container, List, ListItem, SongList } from './style'
import Scroll from '../../components/Scroll'
import { useNavigate, Outlet } from 'react-router-dom'
import Loading2 from '../../components/Loading2'
import { motion } from 'framer-motion'
export default function Rank() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    getRankList()(dispatch)
    return () => {
      dispatch(changeLoading(true))
    }
  }, [])
  const { rankList, loading } = useSelector(state => {
    return {
      rankList: state.rank.get("rankList").toJS(),
      loading: state.rank.get("loading")
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
      initial={{opacity:0 }}
      animate={{opacity:1}}
      exit={{opacity:0}}
      >
      {
        loading ? <Loading2 /> :
          <Container>
            <Scroll>
              <div>
                <h1 className="offical" style={displayStyle}> 官方榜 </h1>
                {RenderRankList(officialList)}
                <h1 className="global" style={displayStyle}> 全球榜 </h1>
                {RenderRankList(globalList, true)}
              </div>
            </Scroll>
            <Outlet />
          </Container>
      }
    </motion.div>
  );
}

