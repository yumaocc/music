import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, TopDesc, Menu, SongList, SongItem } from './style'
import Header from '../../baseUI/Header'
import { useNavigate } from 'react-router-dom'
import { getName, getCount } from '../../api/utils'
import { useDispatch, useSelector } from 'react-redux'
import { getAlbum, changeEnterLoading } from './store/actionCreators'
import Loading2 from '../../components/Loading2/index'
import { changePlayList, changeCurrentSong, changeCurrentIndex } from '../Player/store/actionCreator'
import List from '../../components/List'
import { CustomerServiceOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

export default function Album() {
    const { id } = useParams()
    const [show, setShow] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { coverImgUrl = '', subscribedCount = 0, name = '', creator = '', tracks = [], } = useSelector(state => {
        return state.album.get('currentAlbum').toJS()
    })
    const enterLoading = useSelector(state => {
        return state.album.get('enterLoading')
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
                                <img src={coverImgUrl} alt="" />
                                <div className="play_count">
                                    <i className="iconfont play">&#xe885;</i>
                                    <span className="count">{Math.floor(subscribedCount / 1000) / 10} 万 </span>
                                </div>
                            </div>
                            <div className="desc_wrapper">
                                <div className="title">{name}</div>
                                <div className="person">
                                    <div className="avatar">
                                        <img src={creator.avatarUrl} alt="" />
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
                                    <i className="iconfont" onClick={() => {
                                        dispatch(changePlayList(tracks))
                                        dispatch(changeCurrentIndex(0))//当前歌曲下标
                                    }}>&#xe6e3;</i>
                                    {show && <motion.div style={{
                                        position: 'absolute',
                                        top: 0
                                    }}
                                        animate={{
                                            x: 50,
                                            y: 550
                                        }}
                                        transition={{ duration: 1 }}>
                                        <CustomerServiceOutlined style={{
                                            color: '#f5222d'
                                        }} />
                                    </motion.div>}
                                    <span onClick={allPlaySon}> 播放全部 <span className="sum">(共 {tracks.length} 首)</span></span>
                                </div>
                                <div className="add_list">
                                    <i className="iconfont">&#xe62d;</i>
                                    <span > 收藏 ({getCount(subscribedCount)})</span>
                                </div>
                            </div>
                            <SongItem>
                                <List
                                    tracks={tracks}
                                    changeCurrentSong={changeCurrentSong}
                                    getName={getName}
                                    setShow={setShow}
                                    changePlayList={changePlayList}
                                    changeCurrentIndex={changeCurrentIndex}
                                />
                            </SongItem>
                        </SongList>
                    </div>
                </Container>}
        </motion.div>
    )
}
