import React, { useEffect, useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Top, Tab, TabItem } from './style'
import Player from '../Player'
import Private from '../Private'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { memo } from 'react'
import {changeLoginStatus} from '../Private/store/actionCretors'
 function Home() {
  const navigate = useNavigate()
  const [privateShow, setPrivateShow] = useState(false)//控制个人主页显示和影藏
  const  currentSongStatus = useSelector(state => state.player.toJS().currentSong.id)
  const dispatch = useDispatch()
useEffect(() => {
        if (localStorage.getItem('cookie')) {
            changeLoginStatus(localStorage.getItem('cookie'), dispatch)
        }
    }, [])

  return (
    <div>
      <Top>
        <motion.span
          whileTap={{ x: -90 }}
          className="iconfont menu"
          onClick={() => setPrivateShow(true)}
        >&#xe65c;</motion.span>
        <span className="title">音乐</span>
        <motion.span
          className="iconfont search"
          onClick={() => navigate('/search')}
          whileTap={{ x: 90 }}
        >&#xe62b;</motion.span>
      </Top>

      <Tab>
        <NavLink to="/recommend" className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}><TabItem><span > 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" className={({ isActive }) => "nav-link" + (isActive ? " selected" : "")}><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
      {currentSongStatus === 0 ? '' : <Player />}
      <AnimatePresence exitBeforeEnter>
        {
          privateShow && <Private
            privateShow={privateShow}
            setPrivateShow={setPrivateShow}
          />
        }
      </AnimatePresence>
      <Outlet />
    </div>
  )
}
export default memo(Home)