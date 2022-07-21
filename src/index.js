import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import  {bookList} from './books'
import Book from './book'
import Title from './title'
function Myapp(){
  return(
    <section className='Libary'>
      <Title></Title>
      {
        bookList.map((puskat)=>{
          return(
            
            <div>
              
              <Book key={puskat.id} book={puskat}></Book>
              
            </div>
          )
        })
      }
    </section>
  )
}

ReactDom.render(<Myapp/>,document.getElementById('root'))



// What is a Hook? A Hook is a special function that lets you “hook into” React features.
//  For example, useState is a Hook that lets you add React state to function components. 
// We’ll learn other Hooks later.