import { fromJS } from 'immutable'
import { getQRcode, getQRcodeImage, checkLoginStatus, getCity } from '../../../api/request'
import { LOGIN_QR_IMAGE, LOGIN_USER_DETAIL_DATA, LOGIN_USER_STATUS, LOGIN_QR_STATUS, LOGIN_USER_DATA } from './actionType'

export const qrImageACtion = (data) => {
    return {
        type: LOGIN_QR_IMAGE,
        data
    }
}


export const userDetailDataAction = (data) => {//用户详细信息
    return {
        type: LOGIN_USER_DETAIL_DATA,
        data: fromJS(data)
    }
}
export const userStatusAction = (data) => {
    return {
        type: LOGIN_USER_STATUS,
        data
    }
}
export const QRstatusAction = (data) => {
    return {
        type: LOGIN_QR_STATUS,
        data
    }
}
export const userDataAction = (data) => {//用户信息
    return {
        type: LOGIN_USER_DATA,
        data: fromJS(data)
    }
}

export const changeQRimage = async (dispatch) => {
    try {
        let key = await getQRcode()
        let img = await getQRcodeImage(key.data.data.unikey)
        dispatch(qrImageACtion(img.data.data.qrimg))
        dispatch(QRstatusAction(true))
        return key.data.data.unikey
    } catch (error) {
        console.log(error)
    }
}
export const changeLoginStatus = async (cookie, dispatch) => {
    try {
        let res = await checkLoginStatus(cookie)
        localStorage.setItem('userId', res.data.data.account.id)
        let city = await getCity(res.data.data.profile.city)
        let province = await getCity(res.data.data.profile.province)
        res.data.data.profile.city = city.data.districts[0].name
        res.data.data.profile.province = province.data.districts[0].name
        dispatch(userDataAction(res.data.data))
        dispatch(userStatusAction(true))
    } catch (error) {
        console.log(error)
    }
}

