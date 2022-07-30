import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseEffectBasic=()=>{
    const [value,setvalue]=useState(0)
    useEffect(()=>{
        console.log("use effect")
        if(value>0){
            document.title=`(${value}) New Message`
        }
    })   
    console.log("console")
    return(
        <>
            <h1>
                {value}
            </h1>
            <h3>Good Morning Ashim, Greetings!!!</h3>
            {/* <h2>{data}</h2> */}
            <button className='btn' onClick={()=>setvalue(value+1)}>Button</button>
        </>
    )
}
export default UseEffectBasic