import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useRef, useState } from "react";
import { Container, Bg, ListHeader, ListStyle, Content } from "./style";
import Header from "../../baseUI/Header";
import Scroll from "../../components/Scroll";
import List from '../../components/List';
import { PlusOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { getSinger, getSingerLoading } from './store/actionCreators'
import { useDispatch, useSelector } from 'react-redux';
import { changeSequencePlayList, changePlayList ,changeCurrentSong ,changeCurrentIndex ,changeFullScreen} from '../Player/store/actionCreator'
import { getName } from '../../api/utils'
import { CustomerServiceOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import Loading2 from '../../components/Loading2'
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

    const { hotSongs, picUrl, name } = useSelector((state) => {
        const { singer } = state
        if (singer.get('singerList').size > 0) {
            const data = singer.get('singerList').toJS()
            return {
                hotSongs: data.hotSongs,
                picUrl: data.artist.picUrl,
                name: data.artist.name
            }
        } else {
            return {
                hotSongs: [],
                picUrl: '',
                name: ''
            }
        }
    })//取出redux 歌手的数据
    const loading = useSelector(state => state.singer.get('singerLoading'))
    const handleClick = () => {
        navigate('/singers')
    }
    const playAllMusic = () => {//播放全部事件
        dispatch(changeSequencePlayList(hotSongs))
    }

    return loading ? <Loading2 /> :
        <Container>
            <Header
                background={picUrl}
                title={name}
                handleClick={handleClick}
            ></Header>
            <Content>
                    <div>
                        <Bg background={picUrl}>
                            <div className='btn'>
                                <PlusOutlined />
                                <span>收藏</span>
                            </div>
                        </Bg>
                        <ListStyle >
                            <ListHeader>
                                <PlayCircleOutlined className='icon' onClick={playAllMusic} />
                                <h1>播放全部</h1>
                                <div>{`(共${hotSongs.length}首)`}</div>
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
                    </div>
                {show && <motion.div style={{
                    position: 'absolute',
                    top: 400
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
            </Content>
        </Container>
}

export default Singer;
