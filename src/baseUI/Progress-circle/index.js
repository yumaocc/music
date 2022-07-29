import React from 'react';
import styled from 'styled-components';
import style from '../../assets/global-style';
import { useTransform ,useMotionValue} from "framer-motion"
const CircleWrapper = styled.div`
  position: relative;
  circle {
    stroke-width: 8px;
    transform-origin: center;
    &.progress-background {
      transform: scale (0.9);
      stroke: ${style["theme-color-shadow"]};
    }
    &.progress-bar {
      transform: scale (0.9) rotate (-90deg);
      stroke: ${style["theme-color"]};
    }
  }
`

function ProgressCircle(props) {
  const { radius, duration, currentTime } = props;
  // 整个背景的周长
  const dashArray = Math.PI * 100;
  // 没有高亮的部分，剩下高亮的就是进度
  const dashOffset = 1

  return (
    <CircleWrapper>
      <svg width={radius} height={radius} viewBox="0 0 100 100" version="1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" strokeWidth="20" stroke='#ffccc7' fill="transparent" />
        <circle cx="50" cy="50" r="40" stroke="#ff4d4f" strokeWidth="4" fill="transparent"
           strokeDasharray={dashArray}
           strokeDashoffset={dashOffset}/>
      </svg>
      {/* 淡红色的圆<svg t="1659023421144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3308" width="128" height="128"><path d="M512 950.857143c241.371429 0 438.857143-197.485714 438.857143-438.857143s-197.485714-438.857143-438.857143-438.857143-438.857143 197.485714-438.857143 438.857143 197.485714 438.857143 438.857143 438.857143z m0 73.142857c-285.257143 0-512-226.742857-512-512s226.742857-512 512-512 512 226.742857 512 512-226.742857 512-512 512z" fill="#d75544" p-id="3309"></path></svg> */}
      {/* 红色的圆 <svg t="1659023421144" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3308" width="200" height="200"><path d="M512 950.857143c241.371429 0 438.857143-197.485714 438.857143-438.857143s-197.485714-438.857143-438.857143-438.857143-438.857143 197.485714-438.857143 438.857143 197.485714 438.857143 438.857143 438.857143z m0 73.142857c-285.257143 0-512-226.742857-512-512s226.742857-512 512-512 512 226.742857 512 512-226.742857 512-512 512z" fill="#d81e06" p-id="3309"></path></svg> */}
      {props.children}
    </CircleWrapper>
  )
}

export default React.memo(ProgressCircle);