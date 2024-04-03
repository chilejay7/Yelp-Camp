const router = require('express').Router();
const { Campground } = require('../../models');

router.get('/', async (req, res) => {
    const allCamps = await Campground.find({});
    return res.json(allCamps);
});

router.get('/:campID', async (req, res) => {
    try {
    const { campID } = req.params;
    console.log('The request id is:', campID);
    const data = await Campground.findById(campID);
    return res.json(data);
    } catch (err) {
        console.error(err)
    }
});

router.post('/', async (req, res) => {
    try {
    const { title, location } = req.body;
    
    const newCamp = await Campground.create({
        title,
        location
    });
    return res.json(newCamp);
    } catch (err) {
        console.error(err)
    }
});

router.put('/', async (req, res) => {
    try{
        const { _id, title, location } = req.body;
        console.log('The updated data sent is:', req.body);

        const updatedCamp = await Campground.findByIdAndUpdate(_id, {
            title,
            location
        });
        return res.json(updatedCamp);
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;