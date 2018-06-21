import 'babel-polyfill'
import express from 'express'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('*', async (req, res) => {
  const store = createStore()

  // Load all necessary component data
  await Promise.all(
    matchRoutes(Routes, req.path).map(({route}) => {
      const {loadData} = route
      return loadData ? loadData(store) : null
    })
  )

  res.send(renderer(req, store))
})

app.listen(3000, () => {
  console.log(`Listening on port ${3000}`)
})
