import { observer } from 'mobx-react-lite'
import store from '../../../store/index.js'
import { StyledTodoItem } from './styles.js'
import { Button } from '../../styles/Button.styled.js'
import {InputCheckbox} from '../../styles/InputCheckbox.styled.js'
import WatchEditTask from './WatchEditTask/WatchEditTask.jsx'

const TodoItem = observer(({todo}) => {
	const { completeTodo, removeTodo, deleteTodoText } = store.business
	return (
		<StyledTodoItem>
			<InputCheckbox
				onChange={() => completeTodo(todo.id)}
				type="checkbox"
			/>
			<WatchEditTask todo={todo} />
			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Button onClick={() => removeTodo(todo.id)} bg='#e42c5f' color='#f4f2ff'>
					{ deleteTodoText }
				</Button>
			</div>
		</StyledTodoItem>
	)
})

export default TodoItem
