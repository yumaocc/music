import { fromJS } from 'immutable'
import {CHANGE_SINGER_LIST ,CHANGE_SINGER_LOADING} from './constants'

const initState = fromJS({
    singerList : {
      hotSongs : [],
      artist:{
        picUrl:'',
        name:''
      }
    },
    singerLoading : true

})
export default function reducer(state = initState ,action) {
  switch(action.type) {
    case CHANGE_SINGER_LIST : 
    
    return state.set('singerList',action.data)
    case CHANGE_SINGER_LOADING : 
    return state.set('singerLoading',action.data)
    default : 
    return state
  }
}
