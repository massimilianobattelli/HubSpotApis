const express = require('express');
const apiRoutes = require('./api');
const app = express();
const port = 3000;


app.use(express.json());
app.use(express.static('public'));
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta localhost:${port}`);
});

