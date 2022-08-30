const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080

app.get('/', (req, res) => {
	res.send('OK for class')
})


app.listen(PORT, () => console.log('Listening...'))

