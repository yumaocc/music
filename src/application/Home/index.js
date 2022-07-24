import React from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import { Top, Tab ,TabItem} from './style'
import Player from '../Player'
export default function Home() {
const navigate = useNavigate()
  return (
    <div>
      <Top>
        <span className="iconfont menu">&#xe65c;</span>
        <span className="title">音乐</span>
        <span className="iconfont search" onClick={()=>navigate('/search')}>&#xe62b;</span>
      </Top>
      <Tab>
        <NavLink to="/recommend" className={({ isActive }) =>"nav-link" + (isActive ? " selected" :"")}><TabItem><span > 推荐 </span></TabItem></NavLink>
        <NavLink to="/singers" className={({ isActive }) =>"nav-link" + (isActive ? " selected" :"")}><TabItem><span > 歌手 </span></TabItem></NavLink>
        <NavLink to="/rank" className={({ isActive }) =>"nav-link" + (isActive ? " selected" :"")}><TabItem><span > 排行榜 </span></TabItem></NavLink>
      </Tab>
      <Player />
      <Outlet />
    </div>
  )
}
