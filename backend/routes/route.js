const express = require('express');
const routers = express.Router()
const authenticateUser = require('../middleware/authenticate');

//admin
const {registerAdmin} = require('../controllers/Login/register')
routers.post("/registeradmin",registerAdmin);

//carpooler
const {registerCarPooler} = require('../controllers/Login/register');
const login = require('../controllers/Login/login');
const profile = require('../controllers/Login/profile');
const {fetchprofile,fetchprofilebyid} = require('../controllers/Login/fetchprofile');



routers.post("/registercarpooler",registerCarPooler);
routers.post("/login",login);
routers.post("/profile",authenticateUser,profile);
routers.get("/getprofile",fetchprofile)
routers.get("/getprofile/:profile_id",fetchprofilebyid)



module.exports = routers;