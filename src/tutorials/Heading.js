import React from 'react'
import { data } from './data'
import { useState} from 'react'

const UseState=()=>{
    let delt =true
    const [person,setPerson] =useState(data)
    const remove=(id)=>{
        let removePeople = person.filter((p)=>p.id !== id)
        setPerson(removePeople)
    }
    return(
        <>
            {
                person.map((people)=>{
                    const {id,name}=people
                    return(
                        <div key={id} className='item'>
                            <h1>{name}</h1>
                            <button onClick={()=>remove(id)}>Remove</button>
                        </div>
                    )
                })
            }
            <button className='btn' onClick={del}>Delete Name</button>
        </>
    )
    
    function del(){
        
        const btn = document.querySelector(".btn")
        if(delt===true){
            btn.innerHTML='add Item'
            setPerson([])
            delt=false
        }
        else{
            
            btn.innerHTML="Delete Items"
        }
    }
}
export default UseState