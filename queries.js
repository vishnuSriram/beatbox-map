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

// Queries DB for all beatboxer info
const getAllBeatboxers = (request, response) => {
    client.query('SELECT * FROM beatboxers', function(err, result) {
      if(err) {
        return console.error('error running query', err);
      }
      response.status(200).json(result.rows)
      client.end();
    });
  }
  
// Exports all query results
module.exports = {
    getAllBeatboxers,
    getStateMode
}