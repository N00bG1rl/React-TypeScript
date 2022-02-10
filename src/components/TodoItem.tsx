import React from 'react'
import './TodoItem.css'

const TodoItem: React.FC<{ text: string; onRemove: () => void }> = props => {
  return (
    <li className='item' onClick={props.onRemove}>
      {props.text}
    </li>
  )
}

export default TodoItem
