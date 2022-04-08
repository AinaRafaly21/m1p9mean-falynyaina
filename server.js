const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/m1p9mean-falynyaina'));

app.get('/*', (req,res) =>
  res.sendFile('index.html', {root: 'dist/m1p9mean-falynyaina'})
);
app.listen(process.env.PORT || 8080);
