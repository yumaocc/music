import {CSSTransition} from './CSSTransition'
import React, { useEffect, useState } from 'react'

export default function index() {
    const [loading ,setLoading] =useState(false)
    useEffect(()=>{
        setLoading(true)
    },[])
  return (
    <CSSTransition
    in={loading}
    timeout={1000}
    >

    </CSSTransition>
  )
}
