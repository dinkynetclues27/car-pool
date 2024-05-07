const express = require('express');
const routers = express.Router()
const authenticateUser = require('../middleware/authenticate');

//admin
const {registerAdmin} = require('../controllers/Login/register')
routers.post("/registeradmin",registerAdmin);

//carpooler
const {registerCarPooler} = require('../controllers/Login/register');
const login = require('../controllers/Login/login');
const profile = require('../controllers/Login/profile')
routers.post("/registercarpooler",registerCarPooler);
routers.post("/login",login);
routers.post("/profile",profile);







module.exports = routers;