const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const exphbs = require('express-handlebars')
const gymRouter = require('./routes/gymso_fitness')

const PORT = process.env.PORT || 3000

const app = express()
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'fonts')))
//app.use(express.static(path.join(__dirname, 'images')))
//app.use(express.static("/images"));
//app.use(express.static("/fonts"));

app.use(gymRouter)

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Sanya:1q2w3e4r@cluster0.au9rh.mongodb.net/gymso_fitness')
        app.listen(PORT, () => {
            console.log('Server has been started...')
        })
    } catch (e) {
        console.log(e)
    }
}

start()