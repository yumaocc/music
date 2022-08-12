import React, { useEffect, useRef, useState } from 'react'
import BScroll from '@better-scroll/core'
import { Wrapper, Content,D} from './style'
import { SyncOutlined } from '@ant-design/icons';
import PullDown from '@better-scroll/pull-down'

BScroll.use(PullDown)
export default function BS(props) {

    const { setColor } = props

    const bsRef = useRef()
    const [bs, setBs] = useState(null)
    const [pullUp, setPullUp] = useState(false) //下拉
    const [pullDown, setPullDown] = useState(false)//触底
    const [text ,setText] = useState(false)
    useEffect(() => {
        let b = new BScroll(bsRef?.current, {
            click: true,
            probeType: 3,
            pullDownRefresh: true
        })
        const changePosition = (p) => {
            if (p.y < -256 && setColor) {
                setColor('#f0f0f0')
            } else if (p.y > -256 && setColor) {
                setColor('#ffffff')
            }
        }
       

        setBs(b)
        bs?.on('scroll', changePosition) //滑动事件
        
        return () => {
            setBs(null)
            bs?.off('scroll', changePosition)
            bs?.off('pullingDown', pullDown)
        }
    }, [])
    const changePullDown = () => {
        setPullDown(true)
        
        setText(false)
        setTimeout(()=> {
            setText(true)
            setPullDown(false)
            setTimeout(()=>{
                bs?.finishPullDown()
            },1000)
        },2000)
    }

    bs?.on('pullingDown',changePullDown )


    useEffect(() => {
        bs?.refresh()
    })
    return (
        <Wrapper ref={bsRef}>
            <Content>
                {pullDown && <D>{text ? '刷新完成' : '正在刷新'}<SyncOutlined className='icon' spin /></D>}
                {props.children}
                {pullUp && <div>正在刷新<SyncOutlined spin /></div>}
            </Content>
        </Wrapper>
    )
}

