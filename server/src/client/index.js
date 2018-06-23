import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from 'react-router-config'
import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import thunk from 'redux-thunk'
import Routes from './Routes'
import reducers from './reducers'

const initialState = window.__INITIAL_STATE__
const axiosInstance = axios.create({baseURL: '/api'})
const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
)

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
