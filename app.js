
const express = require("express");
const app = express();

const egg = require ("./routes/egg")


app.use(egg);

app.listen(8080,()=>{
    console.log("listening on a server");

});