import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getName } from '../../../api/utils';
import { MiniPlayerContainer } from './style';
import ProgressCircle from '../../../baseUI/Progress-circle';
import PlayList from '../../PlayList';
function MiniPlayer(props) {
  const { song, changeFullScreen, playing, songPlayingSwitch, currentTime, duration } = props;
  const dispatch = useDispatch()
  const [playListShow, setPlayListSHow] = useState(false)
  const handleClick = () => {//切换播放器
    dispatch(changeFullScreen(true))
  }
  return (
    <>
      <PlayList
        playListShow={playListShow}
        setPlayListSHow={setPlayListSHow}
        height={50}
      />
      <MiniPlayerContainer >
        <div className="icon" onClick={handleClick}>
          <div className="imgWrapper">
            <img className={playing ? "play" : 'paused'} loading="lazy" src={song.al.picUrl} width="40" height="40" alt="img" />
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar || song.artists)}</p>
        </div>
        <div className="control">
          <ProgressCircle radius={32} currentTime={currentTime} duration={duration} >
            {
              playing ? <i className="icon-mini iconfont icon-pause" onClick={songPlayingSwitch}>&#xe650;</i> : <i className="icon-mini iconfont icon-play" onClick={songPlayingSwitch}>&#xe61e;</i>
            }
          </ProgressCircle>
        </div>
        <div className="control">
          <i className="iconfont" onClick={() => setPlayListSHow(true)}>&#xe640;</i>
        </div>
      </MiniPlayerContainer> </>
  )
}

export default React.memo(MiniPlayer);