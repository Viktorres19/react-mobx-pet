import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import { UnorderedList } from './styles.js'
import TodoItem from './TodoItem/TodoItem.jsx'
import { HeadingTwo } from '../styles/HeadingTwo.styled.js'

export const TodoList = observer(() => {
	const { todos } = store.business
	if (!todos.length) {
		return <HeadingTwo>You don`t have tasks for now</HeadingTwo>
	}
	return (
		<UnorderedList>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</UnorderedList>
	)
})
