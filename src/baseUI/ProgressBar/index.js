import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Input = styled.input `
    width: 100%;
    
`

export default function ProgressBar(props) {
    const {duration ,currentTime ,songTimeUpdate} = props
    const onChang = (e) => {
       let nowTime = parseFloat(e.target.value)
        songTimeUpdate(parseInt(nowTime))
    }
    return (
    <Input  type='range' min={0} value={currentTime} max={duration || 0} onChange={(e)=>onChang(e)}/>
  )
}
