
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const { Campground } = require('../models');
const db = require('../config/connection');

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

db.once('open', async () => {
    await Campground.deleteMany({});
    console.log('Previous database entries removed.');
    console.log('Starting to seed data.');

    for (let i = 0; i < 50; i++) {
        const randomCity = Math.floor(Math.random() * 1000);
        const camp = Campground.create({
            title: `${sample(descriptors)} ${sample(places)}`,
            location: `${cities[randomCity].city, cities[randomCity].state}`,
        })
    }

    console.log('Database seeded!');
})