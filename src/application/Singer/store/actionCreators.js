import {CHANGE_SINGER_LIST ,CHANGE_SINGER_LOADING} from './constants'
import {getSingerInfoRequest} from '../../../api/request'
import { fromJS } from 'immutable'
const getSingerAction = (data) =>{
    return {
        type : CHANGE_SINGER_LIST ,
        data : fromJS(data)
    }
}
const getSingerLoading = (data) => {
    return {
        type : CHANGE_SINGER_LOADING,
        data : data
    }
}

const getSinger = (dispatch ,id) => {
    getSingerInfoRequest(id)
    .then ( res => {
        console.log(res)
        dispatch(getSingerAction(res.data))
        dispatch(getSingerLoading(false))
    })
    .catch(err => {
        alert(err)
    })
}

export {
    getSinger ,
    getSingerLoading
}