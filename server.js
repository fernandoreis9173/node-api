const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// iniciando o app
const app = express();

//Iniciando DB
mongoose.connect('mongodb://localhost:27017/nodeapi', 
    {
      useUnifiedTopology: true, 
      useNewUrlParser: true,     
      useCreateIndex: true 
    }
  );

 requireDir("./src/models");   

// primeira rota
app.use("/api",require("./src/routes"));

app.listen(27017);