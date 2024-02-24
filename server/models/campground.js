const { Schema, model } =  require('mongoose');

const campgroundSchema = new Schema({
    title: String,
    price: String,
    description: String,
    location: String
});

const Campground = model('Campground', campgroundSchema);

module.exports = Campground;