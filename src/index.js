const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/data', (req, res) => {
  const data = req.body
  console.log('Received data:', data)
  res.status(200).send('Data received successfully')
})
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
module.exports = app