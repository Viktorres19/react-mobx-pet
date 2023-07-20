import store from '../../../store/index.js'
import { StyledTodoItem } from './styles.js'

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
			<button onClick={() => removeTodo(todo.id)}>X</button>
		</StyledTodoItem>
	);
};

export default TodoItem
