const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('client/dist'));
app.use(express.json);

app.listen(port, (err) => {
  console.log(err ? `unable to start server: ${err}` : `listening at http://localhost:${port}`);
});
