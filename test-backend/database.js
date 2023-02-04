const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "toko_abc",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("mysql connected");
});

module.exports = { conn };
