import React from "react";
import {useState} from 'react'

const Counter= ()=>{
    const [value,setvalue]=useState(0)
    const decrease=(id)=>{
        console.log(value)
        setvalue((value)=>{
            if(value>0){
                return value-1
            }
            else{
                return 0
            }
        })
    }
    return(
        <>
            <section style={{margin:'4rem 40%'}}>
                <h1>Counter</h1>
                <h1 style={{margin:'20px 90px'}}>{value}</h1>
            </section>
            <div style={{margin:'4rem 36%'}}>
                <button className="btn" onClick={()=>{setvalue(value+1)}}>Increase</button>
                <button className="btn" onClick={()=>{setvalue(0)}}>Reset</button>
                <button className="btn" onClick={()=>
                    decrease()
                    // {if(value>0){setvalue(value-1)}}
                    }>Decrease</button>
            </div>
        </>
    )
}
export default Counter