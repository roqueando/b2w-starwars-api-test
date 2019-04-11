const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost/starwars`, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;