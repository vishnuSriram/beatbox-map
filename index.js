const express = require('express');
const app = express();
const path = require('path');

// Required to connect to Heroku Postgres
const { Pool, Client } = require('pg')
const connectionString = 'postgres://vaafvneyyzbmoe:1a5492aecf2dc8ee29c5ba32e4e0d3778d32e63eb7d723ca4e238ceacf166c5b@ec2-23-21-115-109.compute-1.amazonaws.com:5432/d3rvg9a7cpnip'
const pool = new Pool({
  connectionString: connectionString,
  ssl: true
})

const client = new Client({
  connectionString: connectionString,
  ssl: true
})
client.connect()

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/beatboxers', (req, res) => {
  pool.connect((err, client, done) => {
      const query = 'SELECT * FROM beatboxers';
      client.query(query, (error, result) => {
        done();
        if (error) {
          res.status(400).json({error})
        } 
        if(result.rows < '1') {
          res.status(404).send({
          status: 'Failed',
          message: 'No beatboxer information found',
          });
        } else {
          res.status(200).send(result.rows);
        }
      });
    });
  });
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Beatbox Map is live at 127.0.0.1:${port}`);
});