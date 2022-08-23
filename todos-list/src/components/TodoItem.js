import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    <button className='btn btn-sm btn-danger' onClick={() => {onDelete(todo)}}>Delete</button> 
    {/* if we do : 
    1 - onClick = {onDelete} => this means passing the function only
    2 - onClick = {onDelete(todo)} => this means this will get called as soon as the button is render, 
    so for all todos it will run once and then everytime delete button is clicked
    3 - onClick = {() => {onDelete(todo)}} => to avoid above two probs, we want to pass as a fucn with todo but dont want to call when render
    so we pass as a func using arrow function ()=> and then calling onDelete with todo inside the arrow function, this way we pass arrow func so it does not
    get called when render is done and when buttom is clicked, it runs onDelete with todo
    */}
    </>
  )
}
