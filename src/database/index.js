const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/starwars`, { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;