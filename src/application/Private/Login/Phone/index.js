import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, message } from 'antd'
import './index.css'
import QRcode from './img/QR.png'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'
import {getPhoneLogin ,getCAPTCHA ,getVerifyCAPTCHA} from '../../../../api/request'
import {changeLoginStatus} from '../../store/actionCretors'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
 function Phone(props) {
    const [mode, setMode] = useState(false)
    const [sendText, setSendText] = useState('发送验证码')
    const [disabled, setDisabled] = useState(false)//发送验证按钮时候可以点击
    const countdown = useRef(60)
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        phone: '',
        code: '',
        email: '',
        password: ''
    })
    
    //手机号登录和邮箱登录未实现
    const navigate = useNavigate()
    const sendVerifyCode = async () => {//发送验证码
        try {
             await getCAPTCHA(value.phone)
            
        } catch (error) {
            message.error('手机号错误')
        }
    }
    const login = async() => {//登录按钮
        try {
            if(mode) {
                let res = await getPhoneLogin(value.email ,value.password)
                console.log('手机号登录',res)
                changeLoginStatus(res.data.cookie,dispatch)
                localStorage.setItem('cookie',res.data.cookie)
                message.success('登录成功')
                    navigate('/')
            } else {
                message.info('功能完善中')
                // let res = await getVerifyCAPTCHA(value.phone,value.code)
                // console.log(res,'验证码')
                // // changeLoginStatus(res.data.cookie,dispatch)
                // // localStorage.setItem('cookie',res.data.cookie)
                // message.success('登录成功')
            }
        } catch (error) {
            message.success('网络繁忙，请稍后再试')
            console.log(error)
        }
    }
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80%' }}
            className='phone_login'
        >
            <div className='qr_code' onClick={() => props.setLoginMode(loginMode => loginMode = !loginMode)}>
                <img src={QRcode} />
            </div>
            <div className='phone_email'>
                <motion.div className={mode ? '' : 'active'} onClick={() => setMode(!true)}>手机号登录</motion.div>
                <motion.div className={mode ? 'active' : ''} onClick={() => setMode(!false)}>使用密码登录</motion.div>
            </div>
            {
                mode ?
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <input className='phone' type='text' value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} placeholder='请输入手机号' />
                        <input className='phone' type='password' value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} placeholder='请输入密码' />
                    </motion.div>
                    : <motion.div
                        key={mode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <input className='phone' type='text' value={value.phone} onChange={(e) => setValue({ ...value, phone: e.target.value })} placeholder='请输入手机号' />
                        <input className='phone' type='text' value={value.code} onChange={(e) => setValue({ ...value, code: e.target.value })} placeholder='请输入验证码' />
                        <button className='verify_code' disabled={disabled} onClick={sendVerifyCode}>{sendText}</button>
                    </motion.div>
            }
            <Button
                className='btn'
                type="primary"
                shape="round"
                size={'large'}
                onClick={login}>
                登录
            </Button>
        </motion.div>
    )
}
export default memo(Phone)