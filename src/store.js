import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'
// import rootReducer from "./redux/reducers";
import rootSaga from "./redux/sagas";

export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)

// import { createStore, applyMiddleware } from "redux";
// import createSagaMiddleware from "redux-saga";
// import logger from "redux-logger";
// import rootReducer from "./reducers";
// import rootSaga from "./sagas";

// const initialiseSagaMiddleware = createSagaMiddleware();

// const store = createStore(
//   rootReducer,
//   applyMiddleware(initialiseSagaMiddleware, logger)
// );

// initialiseSagaMiddleware.run(rootSaga);

// export default store;

