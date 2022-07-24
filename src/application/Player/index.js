import React, { useEffect, useRef, useState } from 'react'
import {
    changeCurrentSong,
    changeFullScreen,
    changePlayingState,
    changePlayMode,
    changeCurrentIndex,
    changePlayList,
} from './store/actionCreator'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from './style'
import MiniPlayer from './MiniPlayer'
import NormalPlayer from './NormalPlayer'
import { getSongUrl } from '../../api/utils'
import PlayList from '../PlayList'


export default function Player() {
    //目前播放时间
    const [currentTime, setCurrentTime] = useState(0) //歌曲进度
    //歌曲总时长
    const [duration, setDuration] = useState(0)
    const audioRef = useRef()
    const dispatch = useDispatch()
    const {
        currentIndex,//当前歌曲在播放列表的位置
        currentSong,//当前播放的歌曲
        fullScreen,//播放器是否为全屏
        mode,//播放模式
        playList,//播放列表
        playing,//当前歌曲是否播放
        sequencePlayList,// 顺序列表 
        showPlayList
    } = useSelector(state => {
        const { player } = state
        const data = player.toJS()
        return {
            currentIndex: data.currentIndex,
            currentSong: data.currentSong,
            fullScreen: data.fullScreen,
            mode: data.mode,
            playList: data.playList,
            playing: data.playing,
            sequencePlayList: data.sequencePlayList,
            showPlayList: data.showPlayList
        }
    })
    //模拟数据给currentIndex
    useEffect(() => {
        dispatch(changeCurrentIndex(0))
        setTimeout(() => dispatch(changePlayingState(false)))
    }, [])
    useEffect(() => {
        setCurrentTime(0)
        audioRef.current.src = getSongUrl(currentSong.id)
        dispatch(changePlayingState(true))
        playMusic()
        playList.push(currentSong)
        dispatch(changePlayList(playList))
    }, [currentSong.id])

    //播放音乐
    const playMusic = () => {
        setTimeout(() => {
            audioRef.current.play()
        })
    }

    //进度条拖动事件
    const songTimeUpdate = (value) => {//进度条拖动或者点击改变歌曲播放时间
        if (value) {
            setCurrentTime(audioRef.current.currentTime = value)
        }
    }

    //一首歌循环
    const handleLoop = () => {
        audioRef.current.currentTime = 0
        dispatch(changePlayingState(true))
        setTimeout(() => {
            audioRef.current.play()
        })
    }

    //上一曲
    const handlePrev = () => {
        //播放列表只有一首歌时单曲循环
        if (playList.length === 1) {
            handleLoop()
            return
        }
        let index = currentIndex - 1
        if (index < 0) index = playList.length - 1
        if (!playing) dispatch(changePlayingState(true))
        dispatch(changeCurrentIndex(index))
        let current = playList[index] //拿到播放列别的歌曲，然后让其播放
        dispatch(changeCurrentSong(current))
        playMusic()
    }

    //下一曲
    const handleNext = () => {
        //播放列表只有一首歌时单曲循环
        if (playList.length === 1) {
            handleLoop()
            return
        }
        let index = currentIndex + 1
        if (index === playList.length) index = 0
        if (!playing) dispatch(changePlayingState(true))
        dispatch(changeCurrentIndex(index))//跟新歌曲下标
        let current = playList[index] //拿到播放列别的歌曲，然后让其播放
        dispatch(changeCurrentSong(current))
        playMusic()
    }

    //跟新歌曲播放时间
    const onTimeUpdate = () => {
        if (audioRef.current.currentTime === audioRef.current.duration) {//歌曲播放完
            if (mode === 0) {
                setCurrentTime(0)
                setDuration(0)
                dispatch(changePlayingState(false))
                handleNext()
            } else if(mode === 1) {
                handleLoop()
            } else if(mode === 2) {
                let newArr = playList.sort(function () {
                    return Math.random() - 0.5
                })
                dispatch(changePlayList(newArr))
                handleNext()
            }
        }
        setCurrentTime(audioRef.current.currentTime)
    }
    //播放暂停函数
    const songPlayingSwitch = () => {//播放和暂停
        if (!playing) {
            audioRef.current.play()
            dispatch(changePlayingState(true))
        } else {
            audioRef.current.pause()
            dispatch(changePlayingState(false))
        }
    }

    return (
        <Container>
            <audio ref={audioRef} onTimeUpdate={onTimeUpdate}></audio>
            {fullScreen ?
                <NormalPlayer
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                    song={currentSong}
                    changeFullScreen={changeFullScreen}
                    playing={playing}
                    songPlayingSwitch={songPlayingSwitch}
                    currentTime={currentTime}
                    duration={audioRef.current.duration}
                    songTimeUpdate={songTimeUpdate}
                    mode={mode}
                    changePlayMode={changePlayMode}
                    changePlayingState={changePlayingState}
                    fullScreen={fullScreen}
                />
                :
                <MiniPlayer
                    song={currentSong}
                    changeFullScreen={changeFullScreen}
                    songPlayingSwitch={songPlayingSwitch}
                    currentTime={currentTime}
                    duration={duration}
                    playing={playing} />
            }
        </Container>
    )
}
