const express = require('express');
const sequelize = require('./database')
require('dotenv').config();
const app = express();
const path = require("path")
const port = process.env.PORT
const cors = require('cors')
const routers = require('./routes/route')
const bodyParser = require('body-parser');

app.use(cors({credentials:true,origin:["http://localhost:3000", "http://localhost:3001"]}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routers);


sequelize;

app.listen(port, () => {
    console.log("Server is running on port 4000");
  });