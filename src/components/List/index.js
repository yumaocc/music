import { SongItem } from './style'
import { useDispatch } from 'react-redux'
import React, { useRef} from 'react'
export default function List(props) {
    const dispatch = useDispatch()
    const musicRef = useRef(null)
    const { tracks, changeCurrentSong, getName ,changeCurrentIndex ,changePlayList ,changeFullScreen} = props
    return (
        <SongItem >
            {
                tracks.map((item, index) => {
                    return (
                        <li 
                            key={index} onClick={() => {
                            dispatch(changeCurrentSong(item))
                            dispatch(changeCurrentIndex(index))
                            dispatch(changePlayList(tracks))
                            dispatch(changeFullScreen(true))
                        }}>
                            <span className="index">{index + 1}</span>
                            <div className="info">
                                <span>{item.name}</span>
                                <span>
                                    {getName(item.ar)} - {item.al.name}
                                </span>
                            </div>
                        </li>
                    )
                })
            }
        </SongItem>
    )
}
