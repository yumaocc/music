import { SongItem } from './style'
import { useDispatch } from 'react-redux'
import React from 'react'

export default function List(props) {
    const dispatch = useDispatch()
    const { tracks, changeCurrentSong, getName ,setShow ,changeCurrentIndex ,changePlayList} = props
    return (
        <SongItem>
            {
                tracks.map((item, index) => {
                    return (
                        <li key={index} onClick={() => {
                            dispatch(changeCurrentSong(item))
                            dispatch(changeCurrentIndex(index))
                            dispatch(changePlayList(tracks))
                            setShow(true)
                            setTimeout(()=>setShow(false),1000)
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
