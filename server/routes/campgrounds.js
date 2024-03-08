const router = require('express').Router();
const { Campground } = require('../models');

router.get('/', async (req, res) => {
    const camps = await Campground.find({});
    return res.json(camps);
});

router.get('/:id', async ({ params, body }, res) => {
    const { id } = params;
    console.log('The request id is:', id);
    // const data = await Campground.findById(id);
    // return res.json(data);
})

module.exports = router;