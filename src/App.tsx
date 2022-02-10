import { useState } from 'react'

import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (todoText: string) => {
    const newTodo = new Todo(todoText)

    setTodos(curr => {
      return curr.concat(newTodo)
    })
  }

  return (
    <div>
      <TodoForm onAddTodo={handleAdd} />
      <Todos items={todos} />
    </div>
  )
}

export default App
