'use strict';

const express = require('express');

// Constants
const PORT = 20000;
const PORT = 20334;
const PORT = 9229;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('sogeBot');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);