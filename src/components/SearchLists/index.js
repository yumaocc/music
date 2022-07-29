import { SongItem } from './styled'
import { useDispatch } from 'react-redux'
import React ,{Fragment}from 'react'
import { motion } from 'framer-motion'
import Loading2 from '../Loading2'
export default function SearchLists(props) {
    const dispatch = useDispatch()
    const { tracks, changePlayList, changeCurrentSong, changeCurrentIndex ,changeFullScreen} = props
    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100, opacity: 0 }}
        >
            {tracks.length < 0 ? <Loading2 /> :
                <Fragment key={tracks.id}>
                    <span style={{
                        position: 'relative',
                        top: 30,
                        left: 25
                    }}>找到：{tracks.length}个结果</span>
                    <SongItem>
                        {
                            tracks.map((item, index) => {
                                return (
                                    <motion.li
                                        whileTap={{ scale: 1.5 }}
                                        key={index}
                                        onClick={() => {
                                            dispatch(changePlayList(tracks))
                                            dispatch(changeCurrentSong(item))
                                            dispatch(changeCurrentIndex(index))
                                            dispatch(changeFullScreen(true))
                                        }}>
                                        <span className="index">{index + 1}</span>
                                        <motion.div
                                            whileTap={{ color: '#f5222d' }} className="info">
                                            <span>{item.name}</span>
                                            <span>
                                                {item.name}
                                            </span>
                                        </motion.div>
                                    </motion.li>
                                )
                            })
                        }
                    </SongItem></Fragment>}
        </motion.div>
    )
}
