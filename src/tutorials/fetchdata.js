import { useState,useEffect } from "react";
import React from "react";
const url = "https://api.github.com/users"

const Fetchdata= ()=>{
    const [user,setUser]=useState([])

    const getUser = async ()=>{
        const response = await fetch(url)
        const user = await response.json()
        setUser(user)
        console.log(user)
    }
    useEffect(()=>{
        getUser()
        
    }, [])
    return(
        <>
            <div className="container"><h1>Fectch Data</h1></div>
            <ul className="users">
            {
                user.map((data)=>{
                    const {id,login,avatar_url,html_url}=data
                    return(
                        <>
                            {/* <div className='tiles' key={id}>
                            <img className='bImg' src={avatar_url}></img>
                            <div className='title'>
                                <div className='suffix'>
                                {login}
                                </div>
                            </div>
                            </div> */}
                            <li key={id}>
                                <img src={avatar_url} alt={login}></img>
                                <div>
                                    <h4>{login}</h4>
                                    <a href={html_url}>Profile</a>
                                </div>

                            </li>
                        </>
                    )
                })
            }
            </ul>
        </>
    )
}
export default Fetchdata