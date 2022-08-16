import React from 'react'
import {motion} from 'framer-motion'
import {Container} from './style'
import { memo } from 'react'
 function index() {
  return (
    <motion.div
        initial={{y:200}}
        animate={{y:0}}>
          <Container>
            <h1>暂无内容</h1>
            <button>去录制</button>
          </Container>
    </motion.div>
  )
}
export default memo(index)
