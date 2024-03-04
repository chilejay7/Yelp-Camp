const { Schema, model } = require('mongoose');

const campgroundSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: String,
        },
        description: {
            type: String,
        },
        location: {
            type: String,
        },
    }
);

const Campground = model('Campground', campgroundSchema);

module.exports = Campground;