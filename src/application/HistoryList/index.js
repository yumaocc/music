import React from 'react'
import { Container, Item } from './style'
import { List, AutoSizer } from 'react-virtualized';
import {
  changePlayList,
  changeCurrentSong,
  changeCurrentIndex,
  changeFullScreen
} from '../Player/store/actionCreator'
import { useDispatch } from 'react-redux';
import { getName } from '../../api/utils';
export default function HistoryList({ state }) {
  const dispatch = useDispatch()

  const handleClick = (item ,index) => {
    dispatch(changeCurrentSong(item))
    dispatch(changeCurrentIndex(index))
    dispatch(changePlayList(item))
    dispatch(changeFullScreen(true))
  }
  function rowRenderer({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled,滚动中的提示效果
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) {
    return (
      <Item key={key} style={style} onClick={() => handleClick(state[index].song ,index)}>
        <div className='index'>{index +1}</div>
        <div className='author'>
          <h1>{state[index].song.name}</h1>
          <h3>{getName(state[index].song.ar)} - {state[index].song.al.name}</h3>
        </div>
        <div className='count'>
          <svg t="1660237510779" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2335" width="16" height="16"><path d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z" p-id="2336" fill="#bfbfbf"></path><path d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z" p-id="2337" fill="#bfbfbf"></path></svg>
          <span>{state[index].score}次</span>
        </div>
      </Item>
    );
  }
  return (
    <Container>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            rowCount={state.length}
            rowHeight={70}
            rowRenderer={rowRenderer}
            width={width}
          />
        )}
      </AutoSizer></Container>
  )
}
