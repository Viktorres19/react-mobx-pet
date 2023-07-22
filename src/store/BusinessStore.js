import { makeAutoObservable, reaction, toJS } from 'mobx'

export default class Store {
	todos = []
	name = 'Todo manager'
	addTodoText = 'Add Todo'
	deleteTodoText = 'x'

	constructor() {
		makeAutoObservable(this, {}, {autoBind: true})

		reaction(() => this.todos.length, () => {
			console.log('send todos to server: ', toJS(this.todos))
		})
	}

	get countOfCompleted() {
		return this.todos.filter(todo => todo.completed).length
	}

	get countOfTasks() {
		return this.todos.length
	}

	completeTodo(id) {
		const todo = this.todos.find(item => item.id === id)
		todo.completed = !todo.completed
	}

	addTodo(task) {
		this.todos.push({
			title: task,
			completed: false,
			id: Date.now()
		})
	}

	removeTodo(id) {
		this.todos = this.todos.filter(todo => todo.id !== id)
	}
}
