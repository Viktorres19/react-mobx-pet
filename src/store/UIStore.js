import { makeAutoObservable } from 'mobx'

export default class Store {
	locale = 'uk'

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}
}
