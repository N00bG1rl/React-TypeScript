import TodoForm from './components/TodoForm'
import Todos from './components/Todos'
import TodosContextProvider from './store/todos-context'

function App() {
  return (
    <TodosContextProvider>
      <TodoForm />
      <Todos />
    </TodosContextProvider>
  )
}

export default App
