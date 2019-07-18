const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL
});

client.connect();

const getStateMode = (request, response) => {
  client.query('SELECT MODE() WITHIN GROUP (ORDER BY state) AS state_mode FROM beatboxers;', function(err, res) {
    if (err) throw err;
      for (let row of res.rows) {
        // console.log(JSON.stringify(row));
        response.status(200).JSON.stringify(row);
      }
    client.end();
  });
}

// Exports all query results
module.exports = {
    getStateMode
}