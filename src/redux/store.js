import {createStore, applyMiddleware, compose} from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
// import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './root-reducer'

const middlewares = [logger]
const store = createStore(rootReducer, applyMiddleware(...middlewares, thunk))

const persistor = persistStore(store)
export {store, persistor}