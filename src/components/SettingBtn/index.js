import { message } from 'antd'
import React from 'react'
import { Container, Item } from './style'
export default function index(props) {
    const { data, title ,setPrivateShow} = props
    return (
        <Container>
            <h1 >{title}</h1>
            {
                data.map(item => {
                    return (
                        <Item key={item.name} onClick={()=>{
                            setPrivateShow(false)
                            message.success('开发中')
                        }}>
                            <div className='title'>
                                <div>{item.icon}</div>
                                <div>{item.name}</div>
                            </div>
                            <svg t="1659954590408"  viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5504" width="16" height="16"><path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z" p-id="5505" fill="#bfbfbf"></path></svg>
                        </Item>
                    )
                })
            }
        </Container>
    )
}
