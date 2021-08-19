const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const cors = require('cors')
app.use(cors())

app.use(express.json({ extended: false }))
app.get('/', (req, res) => res.send('API Running'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
//dashboard route
app.use('/api/dashboard', require('./routes/api/dashboard'))

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`))