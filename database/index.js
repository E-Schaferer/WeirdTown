const mysql = require('mysql');

module.exports.connection = mysql.createConnection({
  user: 'student',
  password: 'student',
  database: 'legends',
});

module.exports.connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Reading stories not meant to be read...');
  }
});
