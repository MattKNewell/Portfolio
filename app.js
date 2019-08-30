
'use strict';

const express = require('express');

const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.statusCode = 202;
  res.sendFile(path.join(__dirname + '/public/views/index.html'));
});

app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/Resume.html'));
});
/*
app.get('/wedding-packages', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/views/wedding-packages.html'));
});
*/

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
