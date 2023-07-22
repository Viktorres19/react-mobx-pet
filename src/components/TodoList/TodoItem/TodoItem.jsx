import store from '../../../store/index.js'
import { StyledTodoItem } from './styles.js'
import { Button } from '../../styles/Button.styled.js'

const TodoItem = ({todo}) => {
	const { completeTodo, removeTodo } = store.business
	return (
		<StyledTodoItem>
			<input
				onChange={() => completeTodo(todo.id)}
				type="checkbox"
				checked={todo.completed}
			/>
			<span>{todo.title}</span>
			<Button onClick={() => removeTodo(todo.id)} bg='#e42c5f' color='#f4f2ff'>
				X
			</Button>
		</StyledTodoItem>
	);
};

export default TodoItem
