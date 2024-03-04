const router = require('express').Router();
const campgrounds = require('./campgrounds');

router.get('/', (req, res) => {
    res.send('Home routes are working');
});

router.use('/campgrounds', campgrounds);

module.exports = router;