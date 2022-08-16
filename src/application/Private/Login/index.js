import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Content } from './style'
import { useNavigate } from 'react-router-dom'
import Phone from './Phone'
import QRcode from './QRcode'
import { memo } from 'react'


 function Login() {
    const navigate = useNavigate()
    const [loginMode, setLoginMode] = useState(false) //false 表示使用手机号登录，true表示使用二维码登录
    
    return (
        <Container>
            <Content>
                <motion.div
                    className='back'
                    onClick={() => navigate(-1)}
                    initial={{ x: -30 }}
                    animate={{ x: 0 }}
                >
                    <svg t="1659169367872" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3864" width="32" height="32"><path d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z" fill="" p-id="3865"></path></svg>
                </motion.div>
                <AnimatePresence exitBeforeEnter >
                    {
                        loginMode ?
                            <Phone setLoginMode={setLoginMode} key={loginMode} />//手机号或者邮箱登录
                            :
                            <QRcode setLoginMode={setLoginMode}   />//二维码登录
                    }
                </AnimatePresence>
            </Content>
        </Container>
    )
}

export default memo(Login)