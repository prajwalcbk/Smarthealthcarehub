// server.js

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./controllers/login');
const forums = require('./controllers/forums');

const app = express();

app.use(bodyParser.json());
app.use(login);
app.use(forums);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
