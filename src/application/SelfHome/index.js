import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Card_A, Item, Card_B, Card_C } from './style'
import { getYear, getConstellation } from '../../api/utils'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'

 function Index() {
    const navigate = useNavigate()
    const data = useSelector(state => {
        return {
            city: state.self.toJS().userDetail.profile.city.slice(0, 2),
            province: state.self.toJS().userDetail.profile.province.slice(0, 2),
            birthday: state.self.toJS().userDetail.profile.birthday,
            createTime: state.self.toJS().userDetail.profile.createTime,
            level: state.self.toJS().userDetail.level,
            follow: state.self.toJS().follow,
            fans: state.self.toJS().fans,
            event: state.self.toJS().event.length,
            userSongPlayList: state.self.toJS().userSongPlayList

        }
    })

    const getTime = (createTime) => {
        let s = dayjs(createTime)
        let m = s.$M + 1
        if (m < 10) {
            m = `0${m}`
        }
        return `${s.$y}年${m}`
    }
    const MusicPlay = (props) => {
        return (
            props.data.map(item => {
                return <Item key={item.id} onClick={() => navigate(`/recommend/album/${item.id}`)}>
                    <div className='img'><img src={item.coverImgUrl} /></div>
                    <div className='text'>
                        <h2>{item.name}</h2>
                        <h3>{`${item.trackCount - 1} 首，播放${item.playCount}次`}</h3>
                    </div>
                </Item>
            })
        )
    }
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}>
            <Card_A>
                <div className='title'>
                    <h1>基本信息</h1>
                    <a href=''>领取村名证</a>
                </div>
                <div className='content'>
                    <div>{`村龄：${getYear(dayjs, data.createTime)}年 ${getTime(data.createTime)}注册`}</div>
                    <div>{`年龄：${getConstellation(dayjs, data.birthday)}`}</div>
                    <div>{`地区：${data.province} ${data.city}`}</div>
                </div>
                <div className='more'>
                    <span>查看更多</span>
                    <span className="iconfont icon-jiantou more" style={{ color: "black" }}></span>
                </div>
            </Card_A>
            <Card_B>
                <h1 className='title'>音乐品味</h1>
                <div className='content'>
                    < MusicPlay data={data.userSongPlayList} />
                </div>
            </Card_B>
            <Card_C>
                <Item>
                    <Item
                        key={localStorage.getItem('userId')}
                        onClick={() => navigate('/self/history')}
                    >
                        <div className='img'><img src={'http://p4.music.126.net/0v1vwVAMtqnZbCUanqglog==/109951163293111736.jpg?param=200y200'} /></div>
                        <div className='text'>
                            <h2>历史记录</h2>
                            <h3>{`100首`}</h3>
                        </div>
                    </Item>
                </Item>
            </Card_C>
            <Card_C>
                <h1>愿望清单</h1>
                <div>
                    <span>发布愿望</span>
                    <span className="iconfont icon-jiantou more" style={{ color: "black" }}></span>
                </div>
            </Card_C>
        </motion.div>

    )
}

export default memo(Index)