import React from 'react'
import { data } from './data'
import { useState} from 'react'

const UseState=()=>{
    const [person,setPerson] =useState(data)
    return(
        <div className='Heading'>
            <h1>Heading</h1>
            person.map()
        </div>
    )
}
export default UseState