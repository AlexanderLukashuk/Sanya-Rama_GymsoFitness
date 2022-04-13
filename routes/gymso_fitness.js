const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Gymso Fitness'
    })
})

router.get('/about', (req, res) => {
    res.render('aboutUs', {
        title: 'About Us'
    })
})

router.get('/classes', (req, res) => {
    res.render('class', {
        title: 'Classes'
    })
})

router.get('/schedule', (req, res) => {
    res.render('schedule', {
        title: 'Schedule'
    })
})

router.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Contacts'
    })
})

module.exports = router