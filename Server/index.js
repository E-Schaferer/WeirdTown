const express = require('express');
const app = express();
let path = require('path');
let port = 3777;

app.use('/', express.static(path.join(__dirname, '../Public/')));


app.listen(port);
console.log(`time to get weird on port ${port}`);