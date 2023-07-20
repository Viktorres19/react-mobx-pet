import { observer } from 'mobx-react-lite'
import store from '../../store/index.js'
import styled from 'styled-components'

const HeaderTwo = styled.h2`
	color: #2b1887;
`

export const Counter = observer(() => {
	const { todos, countOfCompleted, countOfTasks } = store.business
	if (todos.length) {
		return <HeaderTwo>Completed {countOfCompleted} tasks from {countOfTasks}</HeaderTwo>
	}
})
