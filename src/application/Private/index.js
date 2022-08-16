import React from 'react'
import { Main, Aside, Footer, Content } from './style'
import { motion } from 'framer-motion'
import Header from './Header/index'
import { } from '../../api/request'
import { message } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { userStatusAction } from './store/actionCretors'
import SettingBtn from '../../components/SettingBtn'
import { selfMock_A, selfMock_B, selfMock_C, selfMock_D } from '../../api/utils'
import BS from '../../components/BS'
import { memo } from 'react'

const variants = {
    initial: { x: '-100vw', opacity: 0 },
    animate: { x: '0vw', opacity: 1 },
    exit: { x: '-100vw', opacity: 0 },
}
const style = {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99999,
}

 function Private(props) {
    const { setPrivateShow } = props
    const dispatch = useDispatch()
    const { userStatus, username, avatar } = useSelector(state => {
        let name = state.login.get('userData').toJS()
        let avatar = state.login.get('userData').toJS()
        return {
            userStatus: state.login.get('userStatus'),
            username: name?.profile?.nickname,
            avatar: avatar?.profile?.avatarUrl
        }
    })

    const exit = () => {
        dispatch(userStatusAction(false))
        localStorage.clear('cookie')
        localStorage.clear('userId')
        message.success('退出成功')
        setPrivateShow(false)
    }
    return (
        <motion.div
            style={style}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
        >
            <Main>
                <Header
                    userStatus={userStatus}
                    username={username}
                    avatar={avatar}
                    setPrivateShow={setPrivateShow} />
                <Content>
                    <BS>
                        <SettingBtn data={selfMock_A} setPrivateShow={setPrivateShow}/>
                        <SettingBtn data={selfMock_B} setPrivateShow={setPrivateShow}/>
                        <SettingBtn data={selfMock_C} setPrivateShow={setPrivateShow}/>
                        <SettingBtn data={selfMock_D} setPrivateShow={setPrivateShow} />
                        <Footer onClick={exit}>退出登录</Footer>
                    </BS>
                </Content>
            </Main>
            <Aside onClick={() => setPrivateShow(false)}></Aside>
        </motion.div >
    )
}
export default memo(Private)