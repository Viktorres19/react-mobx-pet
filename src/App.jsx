import { observer } from 'mobx-react-lite'
import { Counter } from './components/Counter/Counter'
import { AddTodo } from './components/AddTodo/AddTodo.jsx'
import { TodoList } from './components/TodoList/TodoList'
import styled from 'styled-components'
import { HeadingOne } from './components/styles/HeadingOne.styled.js'
import store from './store/index.js'

const StyledApp = styled.div`
  background-color: #d5ccff;
  padding: 15px;
  border-radius: 10px;
`

const App = observer(() => {
  const { name } = store.business
  return (
    <StyledApp>
      <HeadingOne>{ name }</HeadingOne>
      <Counter />
      <AddTodo />
      <TodoList />
    </StyledApp>
  )
})

export default App
