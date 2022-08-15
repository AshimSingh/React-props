import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import  {bookList} from './books'
import Book from './book'
import Title from './title'
import Heading from './tutorials/Heading'
// import Setup from './tutorials/SimpleCounter'
// import Setup from './tutorials/useEffectbasic'
import Setup from './tutorials/fetchdata'
function Myapp(){
  return(
    <section>
      {/* <Title></Title>
      <div className='Libary'>
        {
        bookList.map((puskat)=>{
          return(
            <div>
              <Book key={puskat.id} book={puskat}></Book>
            </div>
          )
        })
      }
      </div> */}
      
      <Setup></Setup>
    </section>
  )
}

ReactDom.render(<Myapp/>,document.getElementById('root'))



// What is a Hook? A Hook is a special function that lets you “hook into” React features.
//  For example, useState is a Hook that lets you add React state to function components. 
// We’ll learn other Hooks later.