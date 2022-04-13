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

module.exports = router