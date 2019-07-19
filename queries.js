// IMPORTANT
// Code required to connect to Heroku DB

/*
const { Pool, Client } = require('pg')
const connectionString = 'postgres://vaafvneyyzbmoe:1a5492aecf2dc8ee29c5ba32e4e0d3778d32e63eb7d723ca4e238ceacf166c5b@ec2-23-21-115-109.compute-1.amazonaws.com:5432/d3rvg9a7cpnip'
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
  ssl: true
})
client.connect()

*/
const getAllBeatboxers = (request, response) => {
  client.query('SELECT * FROM beatboxers', (err, res) => {
    console.log(err, res)
    client.end()
  })
}

// Exports all query results
module.exports = {
  getAllBeatboxers
}

/*
// Find most common city for a beatboxer
const getCityMode = (request, response) => {
    client.query('SELECT MODE() WITHIN GROUP (ORDER BY city) AS city_mode FROM beatboxers;', function(err, res) {
      if (err) throw err;
        for (let row of res.rows) {
          response.status(200).json(res.rows);
        }
        client.end();
    });
  }

// Find most common state for a beatboxer
const getStateMode = (request, response) => {
  client.query('SELECT MODE() WITHIN GROUP (ORDER BY state) AS state_mode FROM beatboxers;', function(err, res) {
    if (err) throw err;
      for (let row of res.rows) {
        response.status(200).json(res.rows);
      }
      client.end();
  });
}
*/
// Queries DB for all beatboxer info
  
/*
const getAllBeatboxers = (request, response) => {
  client.query('SELECT * FROM beatboxers', function(err, res) {
    if(err) {
      return console.error('error running query', err);
    }
    response.status(200).json(res.rows);
    client.end();
  });
}
*/