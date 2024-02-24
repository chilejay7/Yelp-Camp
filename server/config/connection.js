const mongoose = require('mongoose');

mongoose
    .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/yelp_camp')
    .then(() => {
        console.log('The database is up and running')
    })
    .catch((err) => {
        console.error(err);
    })