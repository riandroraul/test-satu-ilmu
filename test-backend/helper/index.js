const { conn } = require("../database");

const queryPromise = (query) => {
  return new Promise((resolve, reject) => {
    conn.query(query, (error, results) => {
      if (error) {
        console.log(error);
        return reject(error);
      }
      return resolve(results);
    });
  });
};

module.exports = queryPromise;
