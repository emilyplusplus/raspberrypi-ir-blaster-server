var express = require('express')
var app = express()

app.post('/command', function (req, res) {
  console.log(req.query)
  res.end()
})

app.listen(4000)
