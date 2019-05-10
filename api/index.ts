import * as express from 'express'
import * as next from 'next'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = dev ? 3000 : process.env.PORT

app
  .prepare()
  .then(() => {
    const server = express()

    server.get(`/p/:id`, (req, res) => {
      const actualPage = `/post`
      const queryParams = { id: req.params.id, testTitle: 'foobar' }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err: Error) => {
      if (err) {
        throw err
      }
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((ex: Error) => {
    console.error(ex.stack)
    process.exit(1)
  })
