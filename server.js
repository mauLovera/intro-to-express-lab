// import modules
import express from 'express'
import { dbdChars } from './data/dbdChars.js'

// express app

const app = express()

// app config (app.set)
app.set('view engine', 'ejs')

// mount middleware (app.use)

// mount routes
app.get('/', ((req, res) => res.send('<h1>Testing default route</h1>')))
app.get('/render', ((req, res) => {
  res.render('dbdChars/index', { 
    dbdChars: dbdChars
  })
}))
app.get('/json', ((req, res) => res.send('<h1>Testing default route</h1>')))
app.get('/redirect', ((req, res) => res.redirect('/')))


// port listening
app.listen(3000, () => {
  console.log('Listening on port 3000')
})
