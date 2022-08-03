import { useState,useEffect } from "react";
import React from "react";
const url = "https://api.github.com/users"

const Fetchdata= ()=>{
    const [user,setUser]=useState()

    const getUser = async ()=>{
        const response = await fetch(url)
        const user = await response.json()
        setUser(user)
        console.log(user)
    }
    useEffect(()=>{
        getUser()
        
    },[])
    return(
        <>
            <div className="container"><h1>Fectch Data</h1></div>
            {
                user.map((data)=>{
                    const {id,login,avatar_url,html_url}=data
                    return(
                        <>
                            <h4>{login}</h4>
                        </>
                    )
                })
            }
        </>
    )
}
export default Fetchdata