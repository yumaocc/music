import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../../api/utils";
import {
  NormalPlayerContainer,
  Top,
  Middle,
  Bottom,
  Operators,
  CDWrapper,
  ProgressWrapper
} from "./style";
import ProgressBar from '../../../baseUI/ProgressBar'
import Toast from '../../../baseUI/Toast'
import PlayList from '../../PlayList';
import { AnimatePresence, motion } from 'framer-motion'
function NormalPlayer(props) {
  const [endAnimation, setEndAnimation] = useState(false)//结束动画
  const [playListShow, setPlayListSHow] = useState(false)
  const { song, changeFullScreen, playing, songPlayingSwitch, currentTime, duration, songTimeUpdate, handlePrev, handleNext, mode, changePlayMode, changePlayingState, fullScreen } = props
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [index, setIndex] = useState(Math.random())
  const handleClick = () => { //页面加载和结束时的动画和条状
    setEndAnimation(true)
    setTimeout(() => {
      dispatch(changeFullScreen(false))
    }, 450)
  }
  //播放模式图标
  const getPlayModeIcon = (mode) => {
    if (mode === 0) {
      return <i className="iconfont">&#xe625;</i>
    } else if (mode === 1) {
      return <i className="iconfont">&#xe653;</i>
    } else {
      return <i className="iconfont">&#xe61b;</i>
    }
  }

  const changeMode = () => {
    let newMode = mode + 1
    if (newMode > 2) {
      newMode = 0
    }
    dispatch(changePlayMode(newMode))
    setLoading(true)
    dispatch(changePlayingState(true))
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    switch (mode) {
      case 0: setText('单曲循环')
        break
      case 1: setText('随机播放')
        break
      case 2: setText('顺序播放')
        break
    }
  }

  const durationTime = (duration) => {
    if (duration) {
      return (duration / 60).toFixed(2)
    } else {
      return '加载中'
    }
  }

  return (
        <NormalPlayerContainer s={endAnimation} >
          <div className="background">
            <img
              src={song.al.picUrl + "?param=300x300" ||song.artists[0].img1v1Url}
              width="100%"
              height="100%"
              alt="歌曲图片"
            />
          </div>
          <div className="background layer"></div>
          <Top className="top">
            <div className="back" onClick={handleClick}>
              <i className="iconfont icon-back">&#xe662;</i>
            </div>
            <h1 className="title">{song.name}</h1>
            <h1 className="subtitle">{getName(song?.ar)}</h1>
          </Top>
          <Middle>
            <CDWrapper>
              <div className={playing ? "cd play" : "cd  paused"}>
                <img
                  className="image play"
                  src={song.al.picUrl + "?param=400x400"}
                  alt=""
                />
              </div>
            </CDWrapper>
          </Middle>
          <Bottom className="bottom">
            <ProgressWrapper playing={playing}>
              {/* 歌曲播放的时间 */}
              <span className="time time-l">{(currentTime / 60).toFixed(2)}</span>
              <div className="progress-bar-wrapper">
                <ProgressBar duration={duration} currentTime={currentTime} songTimeUpdate={songTimeUpdate}></ProgressBar>
              </div>
              <div className="time time-r">{durationTime(duration)}</div>
            </ProgressWrapper>
            <Operators>
              <div className="icon i-left" onClick={changeMode}>
                {getPlayModeIcon(mode)}
              </div>
              <div className="icon i-left">
                {/* 上一曲 */}
                <i className="iconfont" onClick={handlePrev}>&#xe6e1;</i>
              </div>
              <div className="icon i-center" >
                {playing ?
                  <i className="icon-mini iconfont icon-pause" onClick={songPlayingSwitch}>&#xe650;</i>
                  :
                  <i className="icon-mini iconfont icon-play" onClick={songPlayingSwitch}>&#xe61e;</i>
                }
              </div>
              <div className="icon i-right">
                {/* 下一曲 */}
                <i className="iconfont" onClick={handleNext}>&#xe718;</i>
              </div>
              <div className="icon i-right" onClick={() => setPlayListSHow(true)}>
                <i className="iconfont">&#xe640;</i>
              </div>
            </Operators>
          </Bottom>
          {/* 播放列表 */}
          <PlayList
            setPlayListSHow={setPlayListSHow}
            playListShow={playListShow}
            height={759}
          />
          {loading && <Toast text={text} />}
        </NormalPlayerContainer >
  );
}
export default React.memo(NormalPlayer);