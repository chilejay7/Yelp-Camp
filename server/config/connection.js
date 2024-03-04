const mongoose = require('mongoose');
const db = 'yelp_camp';

mongoose
    .connect(process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${db}`)
    .then(() => {
        console.log('The database is up and running')
    })
    .catch((err) => {
        console.error(err);
    })

module.exports = mongoose.connection;