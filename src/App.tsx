import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos = [new Todo('Todo2'), new Todo('Todo3')]

  return (
    <div>
      <Todos items={todos} />
    </div>
  )
}

export default App
