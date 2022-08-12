import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import { UndoOutlined } from '@ant-design/icons';
import Loading2 from '../../../../components/Loading2'
import { useSelector, useDispatch } from 'react-redux'
import { changeQRimage, QRstatusAction, userDetailAction, userStatusAction, changeLoginStatus } from '../../store/actionCretors'
import { checkQRcodeStatus } from '../../../../api/request'
const style = {
    position: 'relative',
    left: '51vw',
    color: '#1890ff'
}


export default function QRcode(props) {
    const { setLoginMode } = props
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { qrImage, QRstatus } = useSelector(state => {
        return {
            qrImage: state.login.get('qrImage'),
            QRstatus: state.login.get('QRstatus')
        }
    })

    const login = () => {
        let timer
        changeQRimage(dispatch)
            .then(key => {
                timer = setInterval(async () => {
                    const statusRes = await checkQRcodeStatus(key)
                    if (statusRes.data.code === 800) {
                        message.error('二维码已过期,请重新获取')
                        console.log('二维码过期')
                        clearInterval(timer)
                        dispatch(QRstatusAction(false))
                    }
                    if (statusRes.data.code === 803) {
                        clearInterval(timer)
                        message.success('授权登录成功')
                        changeLoginStatus(statusRes.data.cookie, dispatch)
                        localStorage.setItem('cookie', statusRes.data.cookie)
                        navigate('/')
                    }
                }, 3000)
            })

        return () => {
            clearInterval(timer)
        }
    }
    useEffect(login, [])
    return (
        <motion.div
            className='QR_code'
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
        >
            {!QRstatus && <Loading2 />}
            {
                QRstatus ?
                    <img className='img' src={qrImage}></img> :
                    <div className='img_overdue'
                        onClick={login} >
                        <UndoOutlined />
                        二维码过期，点击重新获取
                    </div>
            }

            <p> 打开网易云app即可扫码登录</p>
            <motion.div
                style={style}
                whileTap={{ opacity: 0 }}
                onClick={() => setLoginMode(loginMode => loginMode = !loginMode)}
            >使用手机号登录</motion.div>
        </motion.div>
    )
}
