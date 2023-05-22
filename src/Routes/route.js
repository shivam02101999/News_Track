const express = require("express");
const Router = express.Router();


const bodyParser = require("body-parser");
Router.use(bodyParser.json());
Router.use(bodyParser.urlencoded({extended:true}));

const Controller = require('../Controllers/user')
// Router.get('/get-countries',Controller.getCountries);
Router.get('/get-States',Controller.getStates);
// Router.get('/get-Cit/ies',Controller.getCities);



Router.post("/createUser", Controller.createUser);
Router.post("/adminLogin", Controller.userLogin);
Router.post("/createPlateform", Controller.CreatePlateform)
Router.post("/createCategories", Controller.CreateCategories)
Router.post("/createSubCategories", Controller.CreateSubCategories)
Router.post("/language", Controller.UserLanguage)
Router.post("/article", Controller.CreateArticle)
Router.post("/mediaType", Controller.createMediaModel)
Router.post("/contact", Controller.ContactModel)
Router.post("/UserRole", Controller.UserroleModel)
Router.post("/User", Controller.UserModel)
Router.post("/status", Controller.status)
Router.post("/select", Controller.SelectModel)
Router.post("/social-bio", Controller.SocialBio)
Router.get("/states", Controller.getStates)
Router.post("/CheckBox", Controller.CheckBoxModel)
Router.post("/MOUTerms", Controller.MOUTermsModel)


//===================== checking your end point valid or not =======================//

Router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
});

module.exports = Router;
