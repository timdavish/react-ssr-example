import 'babel-polyfill'
import express from 'express'
import proxy from 'express-http-proxy'
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes'
import createStore from './helpers/createStore'
import renderer from './helpers/renderer'

const app = express()
const proxyUrl = 'http://react-ssr-api.herokuapp.com'
const proxyOptions = {
  proxyReqOptDecorator (options) {
    options.headers['x-forwarded-host'] = 'localhost:3000'
    return options
  }
}

app.use('/api', proxy(proxyUrl, proxyOptions))
app.use(express.static('public'))

app.get('*', async (req, res) => {
  const store = createStore(req)

  // Load all necessary component data
  await Promise.all(
    matchRoutes(Routes, req.path).map(({route}) => {
      const {loadData} = route

      return loadData
        // Wrap each data load promise with an always-resolved promise to avoid
        // exiting the Promise.all early if a data load fails
        ? new Promise(resolve => loadData(store).then(resolve).catch(resolve))
        : null
    })
  )

  const context = {}
  const content = renderer(req, store, context)

  if (context.url) return res.redirect(302, context.url)
  if (context.status) res.status(context.status)

  res.send(content)
})

app.listen(3000, () => console.log(`Listening on port ${3000}`))
