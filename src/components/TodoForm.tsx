import React, { useRef } from 'react'
import './TodoForm.css'

const TodoForm: React.FC<{ onAddTodo: (text: string) => void }> = props => {
  const textInputRef = useRef<HTMLInputElement>(null)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const enteredText = textInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // Throw an error
      return
    }

    // Pointer to App.js
    props.onAddTodo(enteredText)
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
