const router = require('express').Router();
const campgrounds = require('./campgrounds');
const login = require('./login');

router.get('/', (req, res) => {
    res.send('Home routes are working');
});

router.use('/campgrounds', campgrounds);

router.use('/login', login);

module.exports = router;