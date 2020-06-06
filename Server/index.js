const path = require('path');
const express = require('../node_modules/express');

const app = express();
const port = 3777;

app.use('/', express.static(path.join(__dirname, '../public/')));


app.listen(port);
console.log(`time to get weird on port ${port}`);
