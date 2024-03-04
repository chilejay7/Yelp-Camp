const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Campgrounds routes are connected.');
});

module.exports = router;