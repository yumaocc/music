import  { useRef } from 'react'


 const Debounce = (callback, delay) => {
    const myRef = useRef({time:null})
   
    return () => {
        if (myRef.current.time !== 1) {
            clearTimeout(myRef.current.time)
        }
        myRef.current.time = setTimeout(() => {
            callback()
        }, delay)
    }
}

export {
     Debounce,
}