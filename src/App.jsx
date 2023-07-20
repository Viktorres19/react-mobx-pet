import { observer } from 'mobx-react-lite'
import Header from './components/Header/Header'
import { Counter } from './components/Counter/Counter'
import { AddTodo } from './components/AddTodo/AddTodo.jsx'
import { TodoList } from './components/TodoList/TodoList'
import styled from 'styled-components'

const StyledApp = styled.div`
  background-color: #d5ccff;
  padding: 15px;
  border-radius: 10px;
`

const App = observer(() => {
  return (
    <StyledApp>
      <Header />
      <Counter />
      <AddTodo />
      <TodoList />
    </StyledApp>
  )
})

export default App
