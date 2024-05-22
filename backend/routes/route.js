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
const {updateProfile,updatedprofilestatus} = require('../controllers/Login/updateprofile');
const deleteProfile = require('../controllers/Login/deleteprofile');
const caradd = require('../controllers/Login/caradd');
const { acceptrequest, rejectrequest } = require('../controllers/Login/requestar');

routers.post("/registercarpooler",registerCarPooler);
routers.post("/login",login);
routers.post("/profile",profile);
routers.post("/profile/:user_id",profile);
routers.post("/caradd",caradd);
routers.get("/getprofile",fetchprofile);
routers.get("/getprofile/:profile_id",fetchprofilebyid)
routers.put("/updateprofile/:profile_id",updateProfile)
routers.put("/updateprofilestatus/:profile_id",updatedprofilestatus)
routers.delete("/deleteprofile/:profile_id",deleteProfile)
routers.put("/acceptrequest/:request_id",acceptrequest);
routers.put("/rejectrequest/:request_id",rejectrequest);


//passenger
const {registerPassenger} = require('../controllers/Login/register');
const searchcar = require('../controllers/Login/searchcar');
const updaterequest = require('../controllers/Login/updaterequest');
const fetchRequest = require('../controllers/Login/request');


routers.post("/registerpassenger",registerPassenger);
routers.post("/search",searchcar);
routers.post("/updaterequest",updaterequest);   
routers.get("/fetchrequest/:user_id",fetchRequest)
module.exports = routers;