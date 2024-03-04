const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Routes are working');
});

module.exports = router;