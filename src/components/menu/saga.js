import { takeEvery } from 'redux-saga/effects'

function* menu() {
	return yield [
		yield takeEvery('TEST', test)
	]
}

function* test() {
	try {
		yield () => {return 'test' }
	} catch(e) {
		console.log(e)
	}
}

export default menu