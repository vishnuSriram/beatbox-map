const express = require('express');
const path = require('path');
const db = require('./queries');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/beatboxers', db.getAllBeatboxers);
app.get('/api/citymode', db.getCityMode);
app.get('/api/statemode', db.getStateMode);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Beatbox Map listening on ${port}`);
