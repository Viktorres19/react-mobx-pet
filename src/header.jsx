import { observer } from 'mobx-react-lite'
import Store from './store'
export const Header = observer(() => {
	return (
		<h1>Completed: {Store.business.countOfCompleted}</h1>
	)
})
