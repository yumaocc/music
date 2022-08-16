import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from "react";
import { Container, Bg, ListHeader, ListStyle, Content } from "./style";
import Header from "../../baseUI/Header";
import List from '../../components/List';
import { PlusOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { getSinger, getSingerLoading } from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux';
import { getName } from '../../api/utils'
import Loading2 from '../../components/Loading2'
import {
    changePlayList,
    changeCurrentSong,
    changeCurrentIndex,
    changeFullScreen
} from '../Player/store/actionCreator'
import { memo } from 'react';
function Singer() {
    const singerRef = useRef()
    const dispatch = useDispatch()
    const { id } = useParams()
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    useEffect(() => {
        getSinger(dispatch, id)
        return () => {
            dispatch(getSingerLoading(true))
        }
    }, [])//发送请求获取歌手的歌曲数据

    const {
        hotSongs,
        picUrl,
        name,
        playerStatus,
        loading }
        = useSelector((state) => {
            return {
                hotSongs: state.singer.get('singerList').toJS().hotSongs,
                picUrl: state.singer.get('singerList').toJS().artist.picUrl,
                name: state.singer.get('singerList').toJS().artist.name,
                playerStatus: state.player.toJS().currentSong.id,
                loading: state.singer.get('singerLoading')
            }
        })//取出redux 歌手的数据
    const handleClick = () => {
        navigate('/singers')
    }
    const allPlaySon = () => {
        dispatch(changePlayList(hotSongs))
        dispatch(changeCurrentSong(hotSongs[0]))
        dispatch(changeCurrentIndex(0))
    }

    return loading ? <Loading2 /> :
        <Container>
            <Header
                background={picUrl}
                title={name}
                handleClick={handleClick}
            ></Header>
            <Content>
                    <Bg background={picUrl}>
                        <div className='btn'>
                            <PlusOutlined />
                            <span>收藏</span>
                        </div>
                    </Bg>
                    <ListStyle className='name' playerStatus={playerStatus}>
                        <ListHeader>
                            <PlayCircleOutlined className='icon' onClick={allPlaySon} />
                            <h1>播放全部</h1>
                            <div>{`(共${hotSongs.length - 1}首)`}</div>
                        </ListHeader>
                        <List
                            tracks={hotSongs}
                            changePlayList={changePlayList}
                            getName={getName}
                            setShow={setShow}
                            changeFullScreen={changeFullScreen}
                            changeCurrentSong={changeCurrentSong}
                            changeCurrentIndex={changeCurrentIndex}
                        />
                    </ListStyle>
            </Content>
        </Container>
}

export default memo(Singer)
