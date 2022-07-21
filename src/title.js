import React from "react";
import {useState} from 'react'
function Title (){
    const [title, funTitle] =useState('New Arrivals')
    const handle = ()=>{
        if(title=='New Arrivals'){
            funTitle('New Item')
        }
        else{
            funTitle('New Arrivals')
        }
    }
    return(
            <div className="title">
            <h1>{title}</h1>
            <button onClick={handle}>click</button>
        </div>
    )
}
export default Title