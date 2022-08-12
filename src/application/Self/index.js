import React, { useEffect, useState } from 'react'
import { Container, Bg, Card, Tabs, Avatar, Content } from './style'
import {  useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeUserDetail,
    changeUserFansNum,
    changeUserFoolowsNum,
    changeUserEvent,
    getUserLoad,
    changeUserSongList,
    changeUserSongPlayList,
} from './store/actionCreators'
import { Outlet } from 'react-router-dom'
import Gender from '../../baseUI/Gender'
import { getConstellation, getYear } from '../../api/utils'
import dayjs from 'dayjs'
import BS from '../../components/BS'


const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#f0f0f0',
    width: '100vw',
    height: '100vh',
}
export default function Index() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [color, setColor] = useState('#ffffff')

    useEffect(() => {
        changeUserDetail(localStorage.getItem('userId'), dispatch)
        changeUserFansNum(localStorage.getItem('userId'), dispatch)//获取粉丝数
        changeUserFoolowsNum(localStorage.getItem('userId'), dispatch)//获取关注数
        changeUserEvent(localStorage.getItem('userId'), dispatch)//获取动态数
        changeUserSongList(localStorage.getItem('userId'), dispatch)//用户歌单
        changeUserSongPlayList(localStorage.getItem('userId'), dispatch)//用户历史播放记录
        setTimeout(() => {
            dispatch(getUserLoad(true))//控制动画正常交互
        }, 500)
        return () => {
            dispatch(getUserLoad(false))
        }
    }, [])


    const { bg,
        name,
        avatar,
        playerStatus,
        level,
        gender,
        birthday,
        city,
        createTime,
        province,
        fans,
        follow,
        event,
    } = useSelector(state => {
        let data = state.self.toJS()
        let LoginData = state.login.toJS()
        return {
            bg: data.userDetail.profile.backgroundUrl,
            name: data.userDetail.profile.nickname,
            gender: data.userDetail.profile.gender,
            avatar: data.userDetail.profile.avatarUrl,
            level: data.userDetail.level,
            listenSongs: data.userDetail.listenSongs,
            birthday: LoginData.userData.profile.birthday,
            city: LoginData.userData.profile.city.slice(0, LoginData.userData.profile.city.length - 1),
            createTime: LoginData.userData.profile.createTime,
            province: LoginData.userData.profile.province.slice(0, LoginData.userData.profile.province.length - 1),
            fans: data.fans,
            follow: data.follow,
            event: data.event.length,
            playerStatus: state.player.toJS().currentSong.id,
        }
    })
    return (
        <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={style}>
            <Container  playerStatus={playerStatus}>
            <svg t="1659872718251"  className='ddd' onClick={() => navigate('/')} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1653" width="32" height="32"><path d="M729.6 931.2l-416-425.6 416-416c9.6-9.6 9.6-25.6 0-35.2-9.6-9.6-25.6-9.6-35.2 0l-432 435.2c-9.6 9.6-9.6 25.6 0 35.2l432 441.6c9.6 9.6 25.6 9.6 35.2 0C739.2 956.8 739.2 940.8 729.6 931.2z" p-id="1654" fill='#f5222d'></path></svg>
                <BS setColor={setColor}>
                    <div>
                        <Bg ><img src={bg} /></Bg>
                        <Card>
                            <Avatar><img src={avatar} /></Avatar>
                            <div className='content'>
                                <h1 className='name'>{name}</h1>
                                <div className='detail_1'>
                                    <span>{`${follow}关注 |`}</span>
                                    <span> {`${fans}粉丝 |`}</span>
                                    <span> {`Lv.${level}`} |</span>
                                </div>
                                <div className='detail_2'>
                                    <div className='box'><Gender gender={gender} />{getConstellation(birthday, dayjs)}</div>
                                    <div className='box'>{`${province}${city}`}</div>
                                    <div className='box'>{`村龄${getYear(dayjs, createTime)}年`}</div>
                                </div>
                                <button>编辑资料</button>
                            </div>
                        </Card>
                        <Tabs >
                            <NavLink className='link' to='/self/home' >主页</NavLink>
                            <NavLink className='link' to='/self/event'>{`动态${event}`}</NavLink>
                            <NavLink className='link' to='/self/Podcast'>播客</NavLink>
                        </Tabs>
                        <Content>
                            <Outlet />
                        </Content>
                    </div>
                </BS>
            </Container>
        </motion.div>
    )
}




// dea5e59cb44f1395f66235088dc582d2

