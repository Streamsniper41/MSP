const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('System active')
})

app.listen(port, () => {
  console.log(`Flight system listening at: http://localhost:${port}`)
})