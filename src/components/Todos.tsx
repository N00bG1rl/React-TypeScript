import React from 'react'

import TodoItem from './TodoItem'
import Todo from '../models/todo'

import './Todos.css'

const Todos: React.FC<{ items: Todo[] }> = props => {
  return (
    <ul className='todos'>
      {props.items.map(item => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  )
}

export default Todos
