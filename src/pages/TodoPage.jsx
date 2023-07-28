import { observer } from 'mobx-react-lite'
import store from '../store/index.js'
import { HeadingOne } from '../components/styles/HeadingOne.styled.js'
import { Counter } from '../components/Counter/Counter.jsx'
import { AddTodo } from '../components/AddTodo/AddTodo.jsx'
import { TodoList } from '../components/TodoList/TodoList.jsx'
import Navigation from '../components/Navigation/Navigation.jsx'

const TodoPage = observer(() => {
	const { name } = store.business
	return (
		<div className="home">
			<Navigation />
			<HeadingOne>{ name }</HeadingOne>
			<Counter />
			<AddTodo />
			<TodoList />
		</div>
	)
})

export default TodoPage
