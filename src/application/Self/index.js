import React, { useEffect } from 'react'
import { Container, Bg, Card_A, Tabs, Avatar, Content } from './style'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
    changeUserDetail,
    changeUserFansNum,
    changeUserFoolowsNum,
    changeUserEvent,
    loadingAction,
    changeUserSongList,
} from './store/actionCreators'
import { Outlet } from 'react-router-dom'
import Gender from '../../baseUI/Gender'
import { getConstellation } from '../../api/utils'
import dayjs from 'dayjs'
import BS from '../../components/BS'
import { memo } from 'react'
import Loading2 from '../../components/Loading2'
function Index() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        changeUserDetail(localStorage.getItem('userId'), dispatch)
        changeUserFansNum(localStorage.getItem('userId'), dispatch)//获取粉丝数
        changeUserFoolowsNum(localStorage.getItem('userId'), dispatch)//获取关注数
        changeUserEvent(localStorage.getItem('userId'), dispatch)//获取动态数
        changeUserSongList(localStorage.getItem('userId'), dispatch)//用户歌单
        return () => {
            dispatch(loadingAction(true))
        }
    }, [])

    const data = useSelector(state => {
        return {
            bg: state.self.toJS().userDetail.profile.backgroundUrl,
            gender: state.self.toJS().userDetail.profile.gender ? 'icon-xingbienv' : 'icon-xingbienan',
            avatar: state.self.toJS().userDetail.profile.avatarUrl,
            name: state.self.toJS().userDetail.profile.nickname,
            loading: state.self.toJS().loading,
            city: state.self.toJS().userDetail.profile.city.slice(0, 2),
            province: state.self.toJS().userDetail.profile.province.slice(0, 2),
            birthday: state.self.toJS().userDetail.profile.birthday,
            level: state.self.toJS().userDetail.level,
            follow: state.self.toJS().follow,
            fans: state.self.toJS().fans,
            event: state.self.toJS().event.length
        }
    })

    return (

        <Container >
            {data.loading ? <Loading2 /> : (
                <BS isPullDown={false}>
                <i className="iconfont icon-xiangzuojiantou back" style={{ color: 'white' }} onClick={() => navigate('/')}></i>
                <Bg><img src={data.bg}></img></Bg>
                <Content>
                    <Avatar><img src={data.avatar}></img></Avatar>
                    <Card_A>
                        <div className='content'>
                            <div className='name'>{data.name}</div>
                            <div className='fans'>
                                <span>{`${data.follow}关注`}</span>
                                <span>{`${data.fans}粉丝`}</span>
                                <span>{`LV ${data.level}`}</span>
                            </div>
                            <div className='data_a'>
                                <span>{`ip属地:${data.city}`}</span>
                                <span>{getConstellation(dayjs, data.birthday)}</span>
                                <span>{`${data.province} ${data.city}`}</span>
                                <span className="iconfont icon-jiantou more" style={{ color: "black" }}></span>
                            </div>
                            <div className='edit_material'>
                                <span >编辑资料</span>
                                <span className="iconfont icon-xiangxiajiantou btn" style={{ color: "black" }}></span>
                            </div>
                        </div>
                    </Card_A>
                    <Tabs >
                        <NavLink className='link' to='/self/home' >主页</NavLink>
                        <NavLink className='link' to='/self/event'>{`动态${data.event}`}</NavLink>
                        <NavLink className='link' to='/self/Podcast'>播客</NavLink>
                    </Tabs>
                    <Outlet />
                </Content>

            </BS>
            )}
        </Container>
    )
}

export default memo(Index)