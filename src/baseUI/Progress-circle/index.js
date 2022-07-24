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
  const dashOffset = (0.1 - currentTime) * dashArray;

  return (
    <CircleWrapper>
      <svg width={radius} height={radius} viewBox="0 0 100 100" version="1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" strokeWidth="20" stroke='#ffccc7' fill="transparent" />
        <circle cx="50" cy="50" r="40" stroke="#ff4d4f" strokeWidth="4" fill="transparent"
           strokeDasharray={dashArray}
           strokeDashoffset={dashOffset}/>
      </svg>
      {props.children}
    </CircleWrapper>
  )
}

export default React.memo(ProgressCircle);