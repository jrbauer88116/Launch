import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import Reducers from './rootReducer'
import Sagas from './rootSaga.js'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(Reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(Sagas)

export default store
