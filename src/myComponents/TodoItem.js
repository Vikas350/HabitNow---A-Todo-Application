import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  // ya to hm yha props pass kre aur dot operator se use kre ya
  // ya fir {} me sare elemnts pass krke direct use kre
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      {/* here we pass function not call so it will not render turant */}
      <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}>Delete</button>
    </div>
  )
}

