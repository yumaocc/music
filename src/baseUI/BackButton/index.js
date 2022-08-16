import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: start;
    position: fixed;
    top: 20px;
    left: 20px;
    .back {
        margin-right: 20px;
        margin-top: -20px;
        color: ${({color}) => color };
    }
    h1 {
        color: ${({color}) => color };
        font-size: 15px;
        margin-left: 10px;
    }
`

export default function Back(props) {
    const { title ,handleClick ,color} = props
   return (
    <Content >
        <i color={color} className="iconfont back" onClick={handleClick}>&#xe655;</i>
        <h1 color={color}>{title}</h1>
    </Content>
  )
}
