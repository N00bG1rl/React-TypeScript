import React, { useRef, useContext } from 'react'

import { TodosContext } from '../store/todos-context'
import './TodoForm.css'

const TodoForm: React.FC = () => {
  const todosCtx = useContext(TodosContext)

  const textInputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = textInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // Throw an error
      return
    }

    todosCtx.addTodo(enteredText)
  }

  return (
    <form className='form' onSubmit={handleFormSubmit}>
      <label htmlFor='text'>Todo</label>
      <input type='text' id='text' ref={textInputRef} />
      <button>Add todo</button>
    </form>
  )
}

export default TodoForm
