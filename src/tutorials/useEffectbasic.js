import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectBasic=()=>{
    const [value,setvalue]=useState(0)
    const[size,resize]=useState(window.innerWidth)
    useEffect(()=>{
        console.log("use effect")
        if(value>0){
            document.title=`(${value}) New Message`
        }
        // const btn = document.querySelector(".btn")
        // btn.addEventListener("click",()=>{
        //     console.log("Hello ashim")
        // })
    },[value])
    const checkSize=()=>{
        resize(window.innerWidth)
    }
    useEffect(()=>{
        console.log("use Effect*2")
        window.addEventListener('resize',checkSize)
        // return(()=>{
        //     console.log("clean Up")
        //     window.removeEventListener('resize',checkSize)
        // })
    },[])
    return(
        <>
            <h1>
                {value}
            </h1>
            <h3>Good Morning Ashim, Greetings!!!</h3>
            <h1>Window Size</h1>
            <h3>{size}</h3>
            {/* <h2>{data}</h2> */}
            <button className='btn' onClick={()=>setvalue(value+1)}>Button</button>
        </>
    )
}
export default UseEffectBasic