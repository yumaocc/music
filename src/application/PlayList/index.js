import React from 'react';
import { PlayListWrapper, ScrollWrapper } from './style';
import { motion, AnimatePresence } from 'framer-motion'
import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { getAlbumName } from '../../api/utils'
import { changeCurrentSong, deleteSong } from '../Player/store/actionCreator'
function PlayList(props) {
    const { setPlayListSHow, playListShow ,height} = props
    const dispatch = useDispatch()
    const playlist = useSelector((state) => {
        return state.player.get('playList').toJS()
    })
    const currentSong = useSelector((state) => {
        return state.player.get('currentSong').toJS()
    })
    const deletePlayListSong = (id) => {
        dispatch(deleteSong(id))
    }
   
    return (
        
        <AnimatePresence>

            {
                playListShow &&
                <motion.div
                    layout
                    initial={{
                        y: 850
                    }}
                    animate={{
                        y: height
                    }}
                    exit={{
                        y: 1100
                    }}
                ><PlayListWrapper>
                    
                        <div className="list_wrapper">
                            <CloseOutlined
                                className='list_close'
                                onClick={() => setPlayListSHow(false)} />
                            <div className='list_title'>当前播放
                                <span className='list_num' style={{ fontSize: "10px", color: 'gray' }}>{`(${playlist.length})`}</span>
                            </div>
                            <ScrollWrapper>
                                <AnimatePresence>
                                    {
                                        playlist.map((item,index) => {
                                            return (
                                                <motion.div
                                                    key={item.name}
                                                    exit={{
                                                        x: -100
                                                    }}>
                                                    <div className='list' >
                                                        <div className='item'
                                                            style={{ color: currentSong.id === item.id ? 'red' : '' }}
                                                            onClick={() => dispatch(changeCurrentSong(item))}
                                                        >
                                                            <span className='list_song'>{item.name}</span>
                                                            <span className='list_singer'>{getAlbumName(item.ar)}</span>
                                                        </div>
                                                        <div><DeleteOutlined onClick={() => deletePlayListSong(item.id)} /></div>
                                                    </div>
                                                </motion.div>
                                            )
                                        })
                                    }
                                </AnimatePresence>
                            </ScrollWrapper>
                        </div>
                    </PlayListWrapper>
                </motion.div>
            }
        </AnimatePresence>

    )
}
export default PlayList;