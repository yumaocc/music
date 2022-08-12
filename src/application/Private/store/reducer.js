import { LOGIN_QR_IMAGE, LOGIN_USER_DETAIL_DATA, LOGIN_USER_STATUS ,LOGIN_QR_STATUS ,LOGIN_USER_DATA} from './actionType'
import { fromJS } from 'immutable'

const initState = fromJS({
    qrImage : '',
    userDetailData : {},
    userData : {
        profile:{
            birthday:'',
            city:'',
            createTime:'',
            province:'',
        }
    },
    userStatus : false,//用户是否为登录状态
    QRstatus : false 
})

export default function reducer (state = initState ,action) {
    switch (action.type) {
        case LOGIN_QR_IMAGE:
            return state.set('qrImage',action.data)
        case LOGIN_USER_DETAIL_DATA : 
            return state.set('userDetailData',action.data)
        case LOGIN_USER_STATUS : 
            return state.set('userStatus',action.data)
        case LOGIN_QR_STATUS : 
            return state.set('QRstatus',action.data)
        case LOGIN_USER_DATA : 
            return state.set('userData',action.data)
        default:
            return state
    }
}