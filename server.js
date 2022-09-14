const express = require("express");
const PORT=8000;
const app = express();
const bodyParser = require("body-parser");
const db = require("./config/mongoose");

//middleware //
// adding parser in res we have details in that we have out data in header we will add data to in res to handle storing in body..
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/',require('./routes'));


app.listen(PORT, (req, res) => {
  console.log("server is UP");
});
