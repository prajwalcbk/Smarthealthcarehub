// server.js

const express = require('express');
const bodyParser = require('body-parser');
const login = require('./controllers/login');

const app = express();

app.use(bodyParser.json());
app.use(login);

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
