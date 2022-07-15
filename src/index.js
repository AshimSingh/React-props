import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
const bookList= [
  {
    id: 1,
    img:"https://m.media-amazon.com/images/P/194563183X.01._SCLZZZZZZZ_SX500_.jpg",
    title:"Things we never get over",
    author:"Lucy Score",
  },
  {
    id: 2,
    img:'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
 title:'Our Class isaFamily',
 author:'Shannon Olsen',
  }
]
function Myapp(){
  return(
    <section className='Libary'>
      {
        bookList.map((puskat)=>{
          return(
            <Book key={puskat.id} book={puskat}></Book>
          )
        })
      }
    </section>
  )
}
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
ReactDom.render(<Myapp/>,document.getElementById('root'))