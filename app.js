
const express = require("express");
const bodyParser = require("body-parser");
const app = express();



app.use(express.static(__dirname + "/html", { extensions: "html" }));

app.get("/see-our-chickens", (req, res) => {
    res.sendFile(__dirname + '/html/see-our-chickens.html');
  });

  app.get("/see-our-eggs", (req, res) => {
    res.sendFile(__dirname + '/html/see-our-eggs.html');
  
  });