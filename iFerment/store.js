import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import combinedReducer from './src/reducers'
import rootSaga from './src/reducers/saga'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combinedReducer,
  applyMiddleware(
    sagaMiddleware
  )
)

sagaMiddleware.run(rootSaga);

export default store;
