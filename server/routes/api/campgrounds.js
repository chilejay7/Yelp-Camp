const router = require('express').Router();
const { Campground } = require('../../models');

router.get('/', async (req, res) => {
    const allCamps = await Campground.find({});
    return res.json(allCamps);
});

router.get('/:campId', async (req, res) => {
    try {
    const { campId } = req.params;
    console.log('The request id is:', campId);
    const data = await Campground.findById(campId);
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
        const { id, title, location } = req.body;
        console.log('The updated data sent is:', req.body);

        const updatedCamp = await Campground.findByIdAndUpdate(id, {
            title,
            location
        });
        return res.json(updatedCamp);
    } catch (err) {
        console.error(err);
    }
})

module.exports = router;