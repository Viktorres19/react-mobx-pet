import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import { HeadingTwo } from '../styles/HeadingTwo.styled.js'

export const Counter = observer(() => {
	const { todos, countOfCompleted, countOfTasks } = store.business
	if (todos.length) {
		return <HeadingTwo>Completed {countOfCompleted} tasks from {countOfTasks}</HeadingTwo>
	}
})
