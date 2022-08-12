import { combineReducers } from 'redux';
import { reducer as recommendReducer } from '../application/Recommend/store/index'
import { reducer as singersReducer } from '../application/Singers/store/index'
import {reducer as rankReducer} from '../application/Rank/store/index'
import {reducer as albumReducer} from '../application/Album/store'
import {reducer as singerReducer} from '../application/Singer/store/index'
import {reducer as playerReducer} from '../application/Player/store/index'
import {reducer as searchReducer} from '../application/Search/store/index'
import {reducer as loginReducer}  from '../application/Private/store/index'
import {reducer as selfReducer} from '../application/Self/store/index'
  export default combineReducers({
  recommend: recommendReducer,
  singers: singersReducer,
  rank : rankReducer ,
  album : albumReducer,
  singer : singerReducer,
  player:playerReducer,
  search: searchReducer,
  login:loginReducer,
  self :selfReducer
});