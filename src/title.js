import React from "react";
import {useState} from 'react'
function Title (){
    const [title, funTitle] =useState('New Arrivals')
    const handle = ()=>{
        funTitle("New Items")
    }
    return(
            <div className="title">
            <h1>{title}</h1>
            <button onClick={handle}>click</button>
        </div>
    )
}
export default Title