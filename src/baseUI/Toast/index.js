import React from 'react'
import {motion ,AnimatePresence} from 'framer-motion'
export default function index(props) {
  const {text} = props
  return (
    <AnimatePresence>
      <motion.div
      className='111'
      style={{
        position:'absolute',
        left:'41%',
        top: '110%',
        color: '#ffffff',
        zIndex: 9999,
        fontSize:20,
      }}
      transition={{duration:0.3}}
      animate={{
        y: -250
      }}
      exit={{
        color: '#f5222d'
      }}
      >{text}</motion.div>
    </AnimatePresence>
  )
}
