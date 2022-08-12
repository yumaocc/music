import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Button, message } from 'antd'
import './index.css'
import QRcode from './img/QR.png'
import { checkLoginStatus ,anonimousLogin} from '../../../../api/request'
import { useNavigate } from 'react-router-dom'
export default function Phone(props) {
    const [mode, setMode] = useState(false)
    const [sendText, setSendText] = useState('发送验证码')
    const [disabled, setDisabled] = useState(false)//发送验证按钮时候可以点击
    const countdown = useRef(60)
    const [value, setValue] = useState({
        phone: '',
        code: '',
        email: '',
        password: ''
    })
    //手机号登录和邮箱登录未实现
    const navigate = useNavigate()
    const sendVerifyCode = () => {//发送验证码
    }
    const login = () => {//登录按钮
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
                <motion.div className={mode ? 'active' : ''} onClick={() => setMode(!false)}>邮箱登录</motion.div>
            </div>
            {
                mode ?
                    <motion.div
                        key={mode}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <input className='phone' type='text' value={value.email} onChange={(e) => setValue({ ...value, email: e.target.value })} placeholder='请输入邮箱' />
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
