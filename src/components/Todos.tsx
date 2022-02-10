import React, { useContext } from 'react'

import TodoItem from './TodoItem'
import { TodosContext } from '../store/todos-context'

import './Todos.css'

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className='todos'>
      {todosCtx.items.map(item => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemove={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
