import './App.css'

import { observer } from 'mobx-react-lite'
import { TodoList } from './TodoList'
import { AddTodo } from './AddTodo'
import { Header } from './header'
import store from './store'

const App = observer(() => {
  const { name } = store.business
  return (
    <div className="App">
      <h1>{ name }</h1>
      <Header />
      <AddTodo />
      <TodoList />
    </div>
  )
})

export default App
