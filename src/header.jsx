import { observer } from 'mobx-react-lite'
import store from './store/index.js'
export const Header = observer(() => {
	const { todos, countOfCompleted, countOfTasks } = store.business
	if (todos.length) {
		return <h2>Completed {countOfCompleted} tasks from {countOfTasks}</h2>
	}
})
