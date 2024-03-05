const router = require('express').Router();
const { Campground } = require('../models');

router.get('/', (req, res) => {
    res.send('Campgrounds routes are connected.');
});

router.get('/:id', async ({ params, body }, res) => {
    const { id } = params;
    console.log('The request id is:', id);
    // const data = await Campground.findById(id);
    // return res.json(data);
})

module.exports = router;