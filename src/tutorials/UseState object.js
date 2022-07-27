import React from 'react'
import {useState} from 'react'

const UseStateObject = ()=>{
    const [bookList,setBook]=useState({
        title:"The Alchemist",
        releaseDate:"2001",
        author:"Paulo Choelo",
    })
    const FavBook=()=>{
        setBook({...bookList,author:'I love Paulo'})
    }
    return(
        <>
            <div className='item'><h2>{bookList.title}</h2></div>
            <div className='item'><h3>Release Date{bookList.releaseDate}</h3></div>
            <div className='item'><h4>{bookList.author}</h4>
            <button className='btn' onClick={()=>FavBook()}>Change</button>            
            </div>
            
            
        </>
    )
    
}
export default UseStateObject