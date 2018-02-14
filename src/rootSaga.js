import menu from './components/menu/saga'
import overview from './components/overview/saga'

const root = function* Sagas() {
	yield [
        menu(),
		overview(),
	]
}

export default root