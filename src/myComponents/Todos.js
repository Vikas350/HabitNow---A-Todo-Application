import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "40px auto"
  }
  return (
    <div className="container my-3" style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {props.todos.length === 0 ? "No Todos to Display" :
        props.todos.map((para) => { {/* render using for loop */ }{/* here para generate all props.todos one by one  */}
          {/* for returing multi elements use this <></> syntax */}
          return(
            <>
           <TodoItem todo={para} key={para.sno} onDelete={props.onDelete}/> 
           <hr/>
           </>
          )
        })
      }

    </div>
  )
}

export default Todos


