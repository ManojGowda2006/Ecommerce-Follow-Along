const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect("mongodb+srv://manojgowdan807:HHJP29wer-Lm9Ci@ecommerce-follow-along.kbonw.mongodb.net/")
    .then((data) => {
        console.log(`ManogoDB connected with ${data.connection.host}`);
    })
    .catch((err) => {
        console.log(`Database connection failed ${err.message}`);
        process.exit(1)
     });
};

module.exports = connectDatabase;