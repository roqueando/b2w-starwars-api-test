const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));

require('./router')(app);

app.listen(3000, () => {
    console.log('Star Wars API [ONLINE] on PORT:3000');
});