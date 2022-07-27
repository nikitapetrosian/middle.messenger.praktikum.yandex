import express from 'express'

import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()
const { PORT = 3000 } = process.env

app.use(express.static(`${__dirname}/dist`))

app.get('/*', (_, res) => {
  res.sendFile(`${__dirname}/dist/index.html`)
})

app.listen(PORT, () => {
  console.log(`Server is started at PORT: ${PORT}!`)
})
