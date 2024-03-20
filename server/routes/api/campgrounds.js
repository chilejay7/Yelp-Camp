const router = require('express').Router();
const { Campground } = require('../../models');

router.get('/', async (req, res) => {
    const camps = await Campground.find({});
    return res.json(camps);
});

router.post('/', async (req, res) => {
    try {
    const { campData } = req.body;
    const newCamp = await Campground.create(campData);
    return res.json(newCamp);
    } catch (err) {
        console.error(err)
    }
})

router.get('/:campID', async (req, res) => {
    try {
    const { campID } = req.params;
    console.log('The request id is:', campID);
    const data = await Campground.findById(campID);
    return res.json(data);
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;