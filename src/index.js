import React from 'react'
import ReactDom from 'react-dom'
const bookList= [
  {
    img:"https://m.media-amazon.com/images/P/194563183X.01._SCLZZZZZZZ_SX500_.jpg",
    title:"Things we never get over",
    author:"Lucy Score",
  },
  {
    img:'https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
 title:'Our Class isaFamily',
 author:'Shannon Olsen',
  }
]
function Myapp(){
  return(
    bookList.map((books)=>{
      return(
        <Book props={books}></Book>
      )
    })
  )
}
function Book(props){
  const {img,title,author}=props.props
  return(
    <section>
      <img src={img}></img>
    <h2>{title}</h2>
    <h4>{author}</h4>
    </section>
  )
}
ReactDom.render(<Myapp/>,document.getElementById('root'))