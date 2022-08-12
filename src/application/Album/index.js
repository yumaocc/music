import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../baseUI/Header'
import { useNavigate } from 'react-router-dom'
import { getName, getCount } from '../../api/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbum, changeEnterLoading } from './store/actionCreators'
import Loading2 from '../../components/Loading2/index'
import {
    changePlayList,
    changeCurrentSong,
    changeCurrentIndex,
    changeFullScreen
} from '../Player/store/actionCreator'
import {
    Container,
    TopDesc,
    Menu,
    SongList,
    SongItem
} from './style'
import List from '../../components/List'
import { motion } from 'framer-motion';
export default function Album() {
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        coverImgUrl = '',
        subscribedCount = 0,
        name = '',
        creator = '',
        tracks = [],
        enterLoading,
        currentSongStatus
    } = useSelector(state => {
        return {
            coverImgUrl: state.album.get('currentAlbum').toJS().coverImgUrl,
            subscribedCount: state.album.get('currentAlbum').toJS().subscribedCount,
            name: state.album.get('currentAlbum').toJS().name,
            creator: state.album.get('currentAlbum').toJS().creator,
            tracks: state.album.get('currentAlbum').toJS().tracks,
            enterLoading: state.album.get('enterLoading'),
            tracks: state.album.get('currentAlbum').toJS().tracks,
            currentSongStatus: state.player.toJS().currentSong.id
        }
    })
    
    useEffect(() => {
        getAlbum(id, dispatch)
        return () => {
            dispatch(changeEnterLoading(true))
        }
    }, [])//根据页面跳转的id 获取相应的数据
    const handleBack = () => {
        navigate('/recommend')
    };//返回首页

    const allPlaySon = () => {
        dispatch(changePlayList(tracks))
        dispatch(changeCurrentSong(tracks[0]))
        dispatch(changeCurrentIndex(0))
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: 100 }}>
            {enterLoading ?
                <Loading2 />
                :
                <Container>
                    <Header title='返回' handleClick={handleBack} background={coverImgUrl} />
                    <div>
                        <TopDesc background={coverImgUrl}>
                            <div className="background">
                                <div className="filter"></div>
                            </div>
                            <div className="img_wrapper">
                                <div className="decorate"></div>
                                <img src={coverImgUrl} loading="lazy" alt="" />
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{Math.floor(subscribedCount / 1000) / 10} 万 </span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{name}</div>
                                <div className="person">
                                    <div className="avatar">
                                        <img src={creator.avatarUrl} loading="lazy" alt="" />
                                    </div>
                                    <div className="name">{creator.nickname}</div>
                                </div>
                            </div>
                        </TopDesc>
                        <Menu>
                            <div>
                                <i className="iconfont">&#xe6ad;</i>
                                评论
                            </div>
                            <div>
                                <i className="iconfont">&#xe86f;</i>
                                点赞
                            </div>
                            <div>
                                <i className="iconfont">&#xe62d;</i>
                                收藏
                            </div>
                            <div>
                                <i className="iconfont">&#xe606;</i>
                                更多
                            </div>
                        </Menu>
                        <SongList>
                            <div className="first_line">
                                <div className="play_all">
                                    <i className="iconfont" onClick={allPlaySon}>&#xe6e3;</i>
                                    <span> 播放全部 <span className="sum">(共 {tracks.length} 首)</span></span>
                                </div>
                                <div className="add_list">
                                    <i className="iconfont">&#xe62d;</i>
                                    <span > 收藏 ({getCount(subscribedCount)})</span>
                                </div>
                            </div>
                            <SongItem>
                                <List
                                    changeFullScreen={changeFullScreen}
                                    tracks={tracks}
                                    changeCurrentSong={changeCurrentSong}
                                    getName={getName}
                                    changePlayList={changePlayList}
                                    changeCurrentIndex={changeCurrentIndex}
                                    currentSongStatus={currentSongStatus}
                                />
                            </SongItem>
                        </SongList>
                    </div>
                </Container>}
        </motion.div>
    )
}
