import { observer } from 'mobx-react-lite'
import store from '../../../../store/index.js'
import {useState} from "react";

const WatchEditTask = observer(({todo}) => {
	const { startEditTodo, finishEditTodo } = store.business
	const [data, setData] = useState(todo.title)
	return (
		<div style={{display: 'flex', flexGrow: '2', justifyContent: 'space-between', alignItems: 'center', padding: '0 10px' }}>
			<div>
				{!todo.isEditing && <span>{todo.title}</span>}
				{todo.isEditing && <input defaultValue={todo.title} onChange={e => setData(e.target.value)} />}
			</div>
			<div>
				{todo.isEditing && <img
					onClick={() => finishEditTodo(todo.id, data)}
					style={{marginLeft: '5px' }}
					src='./images/close-icon.svg' alt=''
				/>}
				{!todo.isEditing && <img
						onClick={() => startEditTodo(todo.id)}
						style={{marginLeft: '5px' }}
						src='./images/edit-icon.svg' alt=''
					/>}
			</div>
		</div>
	)
})

export default WatchEditTask
