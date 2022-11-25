const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({ path: "./.env"});

// create connection with database 
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,

})

db.connect((err) => {
  if (err) throw err;

  console.log("database connected");

  
})

module.exports = {db} ;