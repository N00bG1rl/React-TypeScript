import React, { useState } from 'react'
import Todo from '../models/todo'

type TodosContextObj = {
  items: Todo[]
  addTodo: (text: string) => void
  removeTodo: (id: string) => void
}

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
})

const TodosContextProvider: React.FC = props => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(curr => {
      return curr.concat(newTodo)
    })
  }

  const handleRemove = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId)
    })
  }

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: handleAdd,
    removeTodo: handleRemove,
  }

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
