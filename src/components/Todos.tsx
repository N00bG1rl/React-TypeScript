import React from 'react'

import TodoItem from './TodoItem'
import Todo from '../models/todo'

import './Todos.css'

const Todos: React.FC<{
  items: Todo[]
  onRemove: (id: string) => void
}> = props => {
  return (
    <ul className='todos'>
      {props.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={props.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
