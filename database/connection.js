const mysql = require('mysql');
const connection = mysql.createConnection({
      connectionLimit: process.env.DATABASE_CONNECTION_LIMIT,
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE
});

connection.connect((error)=>{
	if(error) throw error;
	console.log("DB open");
});

module.exports = connection;

