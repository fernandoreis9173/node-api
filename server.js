const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

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

app.listen( process.env.PORT || 27017);