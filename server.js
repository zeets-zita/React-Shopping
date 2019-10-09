const path = require('path');

const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const port = 5000;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'db', 'products.json'));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
