import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import  {bookList} from './books'
import Book from './book'
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

ReactDom.render(<Myapp/>,document.getElementById('root'))