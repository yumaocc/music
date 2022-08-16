import React, { useEffect, useRef, useState } from 'react'
import BScroll from '@better-scroll/core'
import { Wrapper, Content, D } from './style'
import { SyncOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Pullup from '@better-scroll/pull-up'
import PullDown from '@better-scroll/pull-down'
import ProbeTypes from 'prop-types'
import { useRequest } from 'ahooks';
import { memo } from 'react';
import { useCallback } from 'react';
BScroll.use(PullDown)
BScroll.use(Pullup)


function BS(props) {
    const dispatch = useDispatch()
    const [pullDownCount, setPullDownCount] = useState(0)
    const [pullUpCount, setPullUpCount] = useState(0)
    const location = useLocation()
    const bsRef = useRef()
    const num = useRef(0)
    const {
        setColor,
        isPullDown,
        changePullDownGetSinger,
        isPullUp,
        pageCount,
        changePullUpGetSinger,
    } = props

    const { data, loading, run } = useRequest(changePullDownGetSinger,{
        debounceWait: 1000,
        manual: true
    });


    const [bs, setBs] = useState(null)
    const [pullUp, setPullUp] = useState(false) //触底
    const [pullDown, setPullDown] = useState(false)//下拉
    const [text, setText] = useState(false)
    //初始配置
    useEffect(() => {
        let b = new BScroll(bsRef?.current, {
            click: true,
            probeType: 3,
            pullDownRefresh: {
                threshold: 50,
                stop: 1
            },
            pullUpLoad: true,
        }
        )
        setBs(b)
        //页面销毁，取消监听
        return () => {
            setBs(null)
            bs?.off('scroll', changePosition)
            bs?.off('pullingDown', changePullDown)
            bs?.off('pullingUp', changePullUp)
        }
    }, [])
    //滑动事件
    async function changePosition(p) {
        if (p.y < -256 && setColor) {
            setColor('#f0f0f0')
        } else if (p.y > -256 && setColor) {
            setColor('#ffffff')
        }
    }
    bs?.on('scroll', changePosition)
    //下拉更新数据函数
    async function changePullDown() {
        if (!isPullDown) return
        setPullDown(true)
        run(dispatch)
        setText(false)
        setText(true)
        setTimeout(() => {
            setPullDown(false)
            bs?.finishPullDown()
        }, 1000);
    }
    bs?.on('pullingDown', changePullDown)
    //触底函数
     const changePullUp =  () => {
        if (!isPullUp) return
        setPullUp(true)
        bs?.refresh()
        num.current++
        console.log(pageCount)
        changePullUpGetSinger(pageCount + 1, dispatch)
        .then(res => {
            setText(true)
            bs?.refresh()
            setPullUp(false)
            bs?.finishPullUp()
        })
        
    }

    bs?.on('pullingUp', changePullUp)//触底监听

    //dom变化重新计算滑动区域
    useEffect(() => {
        bs?.refresh()
    })

    return (
        <Wrapper ref={bsRef}>
            <Content>
                {pullDown ? text ? <D>刷新完成</D> : <D>正在刷新<SyncOutlined className='icon' spin /></D> : ''}
                {props.children}
                {pullUp ? text ? <D>刷新完成</D> : <D>正在刷新<SyncOutlined className='icon' spin /></D> : ''}
            </Content>
        </Wrapper>
    )
}

BS.probeTypes = {
    isPullDown: ProbeTypes.bool,
    changePullDownGetSinger: ProbeTypes.func,
    changePullUpGetSinger: ProbeTypes.func,
    isPullUp: ProbeTypes.bool,
    pageCount: ProbeTypes.number,
}
BS.defaultProps = {
    isPullDown: false,
    changePullDownGetSinger: null,
    changePullUpGetSinger: null,
    isPullUp: false,
    pageCount: 0,
}
export default memo(BS)