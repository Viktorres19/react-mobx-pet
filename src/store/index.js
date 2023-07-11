import { makeAutoObservable } from 'mobx'

import UIStore from './UIStore.js'
import BusinessStore from './BusinessStore.js'


class RootStore {
	ui = new UIStore()
	business = new BusinessStore()

	constructor() {
		makeAutoObservable(this, {}, { autoBind: true })
	}

}

export default new RootStore()
