const app = require('./main');
const express = require('express');

app.use(express.static('public'));

app.listen(process.env.APP_PORT, () => {
  console.log('Server listening on port:', process.env.APP_PORT);
});
