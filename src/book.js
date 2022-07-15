import React from "react"

function Book(props){
  const {img,title,author}=props.book
  const myfun =(e)=>{
    console.log(e)
    console.log(e.target)
    alert("Hello ashim")
  }
  const ref=(author)=>{
    
    console.log(author)
  }
  return(
    <div className='books'>
      <img onMouseOver={()=>console.log(title)} src={img} alt="hello"></img>
    <h2 onClick={()=>console.log("you are reading "+ title)}>{title}</h2>
    <h4>{author}</h4>
    <button onClick={myfun}>Alert</button>
    <button onClick={()=>ref(author)}>Refrence</button>
    </div>
  )
}
export default Book