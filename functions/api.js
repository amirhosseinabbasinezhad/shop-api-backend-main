// functions/api.js

const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the serverless function!' });
});

module.exports.handler = serverless(app);
