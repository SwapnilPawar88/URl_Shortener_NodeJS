const express = require('express')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000

const connectDB = require('./config/DBConfig')
connectDB();

app.use(express.json({ extended: false }))

app.use('/', require('./routes/redirect'))
app.use('/api/url', require('./routes/urls'))

app.listen(PORT, () => console.log(`Server Started on Port ${PORT}`))
