// get the client
const mysql = require("mysql2/promise");
const mySqlConn = require('../../config.json')

let connection = null;
// create the connection to database
async function main() {
  if (connection) {
    return connection;
  }
  connection = await mysql.createConnection(mySqlConn);
  return connection;
}

async function getUserById(username) {
  const ins = await main();
  const [rows, fields] = await ins.execute("SELECT * FROM `user` WHERE `username` = ? ",[username]);
    // console.log(rows)
    return rows;
    
}

async function getUserInDatabase() {
  const ins = await main()
  const [rows, fields] = await ins.execute("SELECT * FROM `user`");
  return rows
}

// getUserById(wlc)
module.exports = {
  getUserById,
  getUserInDatabase
};

// simple query
// connection.query("SELECT * FROM `user`", function (err, results, fields) {
//   // console.log(err);
//   console.log(results); // results contains rows returned by server
//   // console.log(fields); // fields contains extra meta data about results, if available
// });
