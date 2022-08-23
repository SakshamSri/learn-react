import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = (props) => {
  let customStyle = {
    margin: "40px auto",
    minHeight: "70vh"
  }
  return (
    <div className="container" style={customStyle}>
      <h2 className='my-3'> Todos List! </h2>
      {props.todos.length === 0 ? "No Todos to display" :
        props.todos.map((todo) => {
          return (
            <>
              <TodoItem todo={todo} key={todo.index} onDelete={props.onDelete} /> {/* adding TodoItem component and sending the first todos [0] directly,
              need to use { } to catch this arg in TodoItem*/}
              <hr />
            </>
          )
        })
      }
    </div>
  )
}
