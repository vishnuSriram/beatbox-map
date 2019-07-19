const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  dialectOption: {
    ssl: true
  }
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// Find most common city for a beatboxer
const getCityMode = (request, response) => {
    client.query('SELECT MODE() WITHIN GROUP (ORDER BY city) AS city_mode FROM beatboxers;', function(err, res) {
      if (err) throw err;
        for (let row of res.rows) {
          response.status(200).json(res.rows)
        }
        client.end();
    });
  }

// Find most common state for a beatboxer
const getStateMode = (request, response) => {
  client.query('SELECT MODE() WITHIN GROUP (ORDER BY state) AS state_mode FROM beatboxers;', function(err, res) {
    if (err) throw err;
      for (let row of res.rows) {
        response.status(200).json(res.rows)
      }
      client.end();
  });
}

// Queries DB for all beatboxer info
const getAllBeatboxers = (request, response) => {
    client.query('SELECT * FROM beatboxers', function(err, res) {
      if(err) {
        return console.error('error running query', err);
      }
      response.status(200).json(res.rows)
      client.end();
    });
  }
  
// Exports all query results
module.exports = {
    getAllBeatboxers,
    getStateMode,
    getCityMode
}