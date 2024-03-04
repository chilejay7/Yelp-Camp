const router = require('express').Router();
const { Campgrounds } = require('../models');

router.get('/', (req, res) => {
    res.send('Campgrounds routes are connected.');
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const data = await Campgrounds.findById(id);
    return res.json(data);
})

module.exports = router;