import { SongItem, Item } from './style'
import { useDispatch } from 'react-redux'
import React from 'react'
import { List } from 'react-virtualized'
export default function Index(props) {
    const dispatch = useDispatch()
    const { 
        tracks,
        changeCurrentSong,
        getName,
        changeCurrentIndex,
        changePlayList,
        changeFullScreen } = props
    function rowRenderer({
        key, // Unique key within array of rows
        index, // Index of row within collection
        style, // Style object to be applied to row (to position it)
    }) {
        return (
            <Item
                key={key}
                style={style}
                onClick={() => {
                    dispatch(changeCurrentSong(tracks[index]))
                    dispatch(changeCurrentIndex(index))
                    dispatch(changePlayList(tracks))
                    dispatch(changeFullScreen(true))
                }}>
                <span className="index">{index + 1}</span>
                <div className="info">
                    <span>{tracks[index].name}</span>
                    <span>
                        {getName(tracks[index].ar)} - {tracks[index].al.name}
                    </span>
                </div>
            </Item>
        );
    }
    return (
        <SongItem>
            <List
                // 窗口的高度,必填 520
                height={props.currentSongStatus === 0 ? 520 : 470}
                // 窗口的宽度,必填
                width={500}
                // 总共个数
                rowCount={tracks.length}
                // cell高度
                rowHeight={65}
                rowRenderer={rowRenderer}>
            </List>
        </SongItem>
    )
}