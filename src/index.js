import express from 'express'

const app = express()
const port = 4510;

app.listen(port, console.log(`server is running on ${port}`))