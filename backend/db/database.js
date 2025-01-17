const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.db_URL)
    .then((data) => {
        console.log(`ManogoDB connected with ${data.connection.host}`);
    })
    .catch((err) => {
        console.log(`Database connection failed ${err.message}`);
        process.exit(1)
     });
};

module.exports = connectDatabase;