const mysql = require("mysql2");
const { config } = require('../constans.js');




class DBConnection {
  static connection;
  static init() {
    this.connection = mysql.createConnection(config.dbConfig);
    this.connection.connect(err => {
      if (err) {
        throw err;
      }
    });
  }
  static getConnection() {
    return this.connection;
  }
}

module.exports = DBConnection;
