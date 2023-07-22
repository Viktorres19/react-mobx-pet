import store from '../../../store/index.js'
import { StyledTodoItem } from './styles.js'
import { Button } from '../../styles/Button.styled.js'
import {InputCheckbox} from "../../styles/InputCheckbox.styled.js";

const TodoItem = ({todo}) => {
	const { completeTodo, removeTodo, deleteTodoText } = store.business
	return (
		<StyledTodoItem>
			<InputCheckbox
				onChange={() => completeTodo(todo.id)}
				type="checkbox"
			/>
			<span>{todo.title}</span>
			<Button onClick={() => removeTodo(todo.id)} bg='#e42c5f' color='#f4f2ff'>
				{ deleteTodoText }
			</Button>
		</StyledTodoItem>
	);
};

export default TodoItem
