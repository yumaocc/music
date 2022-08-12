import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Container, Animation, Content } from './style'
import BackButton from '../../baseUI/BackButton'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import HistoryList from '../HistoryList'
import { useSelector } from 'react-redux'
export default function History() {
    const { state } = useLocation()
    const [changeList, setChangeList] = useState(true)
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(true)
    const handleClick = () => {
        setIsShow(false)
    }
    const playMusicStatus = useSelector(state => state.player.toJS().currentSong.id)
    return (
        <Animation>
            <CSSTransition
                in={isShow}
                classNames='card'
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
                                timeout={900}
                                unmountOnExit={true}
                                mountOnEnter={true}
                                appear
                                classNames={{
                                    enterActive: 'animate__animated animate__fadeInRight',
                                    exitActive: 'animate__animated animate__fadeOutLeft',
                                }}>
                                {
                                    changeList ? <HistoryList state={state} /> :
                                        <HistoryList state={[...state].sort(() => 0.5 - Math.random())} />
                                }
                            </CSSTransition>
                        </SwitchTransition>
                    </Content>
                </Container>
            </CSSTransition>
        </Animation>
    )
}
