import express from 'express'
import bodyParser from 'body-parser'
import { STATIC_DIR } from '../constants'

const app: express.Application = express()

app.use(express.static(STATIC_DIR))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.all('*', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')

})
app.get('/', (req, res) => {
  res.send('hello')
})
app.get('*', (req, res) => {
  res.sendFile(process.cwd() + '/mock-server-site/static/index.html')
})
app.listen(8090, () => {
  console.log('listening on port 8090')
})