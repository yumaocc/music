import React, { useEffect,  useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Animation, Content } from './style'
import BackButton from '../../baseUI/BackButton'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import HistoryList from '../HistoryList'
import { useDispatch, useSelector } from 'react-redux'
import { changeUserSongPlayList } from '../Self/store/actionCreators'
import { memo } from 'react'
function History() {
    const [changeList, setChangeList] = useState(true)
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(true)
    const dispatch = useDispatch()

    useEffect(() => {
        changeUserSongPlayList(localStorage.getItem('userId'), dispatch)
    }, [])

    const data = useSelector(state => state.self.toJS().userAllSongPlayList)
    const handleClick = () => {
        setIsShow(false)
    }
    const playMusicStatus = useSelector(state => state.player.toJS().currentSong.id)
    return (
        <Animation>
            <CSSTransition
                in={isShow}
                classNames={{
                    enterActive: 'animate__animated animate__fadeInRight',
                    exitActive: 'animate__animated animate__fadeOutLeft',
                }}
                timeout={500}
                appear
                onExited={() => navigate(-1)}
                unmountOnExit={true}
            >
                <Container>
                    <BackButton color='black' title='听歌排行榜' handleClick={handleClick} />
                    <div className='taps'>
                        <div onClick={() => setChangeList(true)}>最近一周<h1 className={changeList ? 'active' : ''}></h1></div>
                        <div onClick={() => setChangeList(false)}>所有时间<h1 className={changeList ? '' : 'active '}></h1></div>
                    </div>
                    <Content status={playMusicStatus}>
                        <SwitchTransition>
                            <CSSTransition
                                key={changeList}
                                timeout={500}
                                unmountOnExit={true}
                                mountOnEnter={true}
                                appear
                                classNames={{
                                    enterActive: 'animate__animated animate__fadeInRight',
                                    exitActive: 'animate__animated animate__fadeOutLeft',
                                }}>
                                {
                                    changeList ? <HistoryList state={data} /> :
                                        <HistoryList state={[...data].sort(() => 0.5 - Math.random())} />
                                }
                            </CSSTransition>
                        </SwitchTransition>
                    </Content>
                </Container>
            </CSSTransition>
        </Animation>
    )
}

export default memo(History)