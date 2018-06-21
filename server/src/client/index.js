import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Routes from './Routes'
import reducers from './reducers'

const initialState = window.__INITIAL_STATE__
const store = createStore(reducers, initialState, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
