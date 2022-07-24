import React from 'react'
import { Container } from './style'
import { motion } from 'framer-motion'
export default function index(props) {
    const { setSuggestShow, setValue, suggest ,searchClick} = props
    return (
        <motion.div
            style={{
                position: 'absolute',
                top: '60px',
                left: '20px',
            }}
        >
            <Container onClick={()=>setSuggestShow(false)}>
                {
                    suggest.map((item) => {
                        return  <div className='item' onClick={() => {
                            setValue(item.keyword)
                            
                            searchClick()
                        }
                        }><div className='text'>{item.keyword}</div></div>
                    })
                }
            </Container>
        </motion.div>
    )
}
