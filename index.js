require('dotenv').config()
const express = require('express')
const res = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('srishtisinghcom')
})
app.get('/instagram',(req,res)=>{
    res.send('<h1>pls login my scc</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai peeo backend se</h2>')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})