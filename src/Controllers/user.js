const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CreateUser = require("../Models/CreateUserModel")
const PlateformModel = require("../Models/PlateformModel")
const CategoriesModel = require("../Models/CategoriesModel")
const SubCategoriesModel = require("../Models/SubCategoriesModel")
const LanguageModel = require("../Models/LanguageModel")
const ArticleModel = require("../Models/ArticleModel")
const MediaModel = require("../Models/MediaModel")
const StateModels = require("../Models/StatesModel");
const  ContactModels = require("../Models/ContactModel")
 const  SelectModels = require("../Models/SelectModel")
const  SocialBios = require("../Models/Social_BioModel")
const  UserModels = require("../Models/UserModel")
 const  Userrole = require("../Models/User_roleModel")
 const CheckBoxModels = require("../Models/CheckBoxModel");
const StatusModel = require("../Models/StatusModel");
const MOUTermsModels = require("../Models/MOUTermsModel");
// const { City } = require("country-state-city");





//***************MOUTerms Model************************ */

const MOUTermsModel = async function (req, res) {
    try {
        let data = req.body;
        let {RevenueShare, AgreementStartDate, AgreementENDDate, AutoRenewal,Reffera} = data;

        let MOUTerms = await MOUTermsModels.create(data)
        res.status(201).send({
            status: true,
            message: "States Created Successfully",
            data: MOUTerms
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}

//***************States Model************************ */

const getStates = async function (req, res) {
    try {
        let data = req.body;
        let { name} = data;

        let states = await StateModels.create(data)
        res.status(201).send({
            status: true,
            message: "States Created Successfully",
            data: states
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//***************Checkbox Model************************ */

const CheckBoxModel = async function (req, res) {
    try {
        let data = req.body;
        let { CheckBox_name} = data;

        let CheckBox = await CheckBoxModels.create(data)
        res.status(201).send({
            status: true,
            message: "CheckBox Created Successfully",
            data: CheckBox
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//***************Select Model************************ */

const SelectModel = async function (req, res) {
    try {
        let data = req.body;
        let { Select_name} = data;

        let Select = await SelectModels.create(data)
        res.status(201).send({
            status: true,
            message: "Select Created Successfully",
            data: Select
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//***************Social BIO Model************************ */

const SocialBio = async function (req, res) {
    try {
        let data = req.body;
        let { User_image, User_Bio, Social_facebook , Social_linkdin, Social_instagram ,Social_Twitter } = data;

        let SocialBio = await SocialBios.create(data)
        res.status(201).send({
            status: true,
            message: "SocialBio Created Successfully",
            data: SocialBio
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//***************User\Role Model************************ */

const UserroleModel = async function (req, res) {
    try {
        let data = req.body;
        let { User_name, Password , First_name , Middle_name , last_name , department , User_role ,User_superior , Byline , display_name } = data;

        let User = await Userrole.create(data)
        res.status(201).send({
            status: true,
            message: "userRole Created Successfully",
            data: User
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//***************User_statusModel************************ */
const status = async function (req, res) {
    try {
        let data = req.body;
        let { UserStatus } = data;

        let status = await StatusModel.create(data)
        res.status(201).send({
            status: true,
            message: "status Created Successfully",
            data: status
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}
//***************User Model************************ */
const UserModel = async function (req, res) {
    try {
        let data = req.body;
        let { name, phone,email,password, address, } = data

        if (await UserModels.findOne({ phone }))
            return res.status(400).send({ status: false, message: "Phone already exist" })

        if (await UserModels.findOne({ email }))
            return res.status(400).send({ status: false, message: "Email already exist" })

        //  const encryptedPassword = bcrypt.hashSync(password, 12)
        //  req.body['password'] = encryptedPassword;

        var token = jwt.sign({
            userId: UserModels._id,
        }, "project");
        data.token = token;

        let savedData = await UserModels.create(data);
        res.status(201).send({
            status: true,
            msg: "User Register successfull",
            data: {

                name: savedData.name,
                email: savedData.email,
                phone: savedData.phone,
                address: savedData.address,
                password:savedData.password,
                
                token: token

            }
        })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
};


//***************Contact************************ */
const ContactModel = async function (req, res) {
    try {
        let data = req.body;
        let { Mobile_1, email_1,Mobile_2, email_2, address,Pincode } = data

        if (await ContactModels.findOne({ Mobile_1:Mobile_2 }))
            return res.status(400).send({ status: false, message: "Phone already exist" })

        if (await ContactModels.findOne({ email_1: email_2 }))
            return res.status(400).send({ status: false, message: "Email already exist" })

        // const encryptedPassword = bcrypt/.hashSync(password, 12)
        // req.body['password'] = encryptedPassword;

        var token = jwt.sign({
            userId: ContactModels._id,
        }, "project");
        data.token = token;

        let savedData = await ContactModels.create(data);
        res.status(201).send({
            status: true,
            msg: "User Register successfull",
            data: {

                Mobile_1: savedData.Mobile_1,
                Mobile_2: savedData.Mobile_2,
                email_1: savedData.email_1,
                email_2: savedData.email_2,
                Pincode: savedData.Pincode,
                address: savedData.address,
                State_City:savedData.State_City,
                token: token

            }
        })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
};

//***************Create User************************ */
const createUser = async function (req, res) {
    try {
        let data = req.body;
        let { name, phone, email, password, address } = data

        if (await CreateUser.findOne({ phone: phone }))
            return res.status(400).send({ status: false, message: "Phone already exist" })

        if (await CreateUser.findOne({ email: email }))
            return res.status(400).send({ status: false, message: "Email already exist" })

        const encryptedPassword = bcrypt.hashSync(password, 12)
        req.body['password'] = encryptedPassword;

        var token = jwt.sign({
            userId: CreateUser._id,
        }, "project");
        data.token = token;

        let savedData = await CreateUser.create(data);
        res.status(201).send({
            status: true,
            msg: "User Register successfull",
            data: {

                name: savedData.name,
                phone: savedData.phone,
                email: savedData.email,
                password: savedData.password,
                address: savedData.address,
                token: token

            }
        })
    }
    catch (err) {
        res.status(500).send({ status: false, error: err.message })
    }
};

//****************User Login ******************/
const userLogin = async function (req, res) {
    try {
        let data = req.body;
        let { email, password } = data;

        let userExists = await CreateModel.findOne({ email: email });


        if (!userExists) {
            return res.status(400).send({
                status: false,
                msg: "Email and Password is Invalid"
            })
        };

        let compared = await bcrypt.compare(password, userExists.password)
        if (!compared) {
            return res.status(400).send({
                status: false,
                message: "Your password is invalid"
            })
        };

        return res.status(200).send({
            status: true,
            msg: "Admin Login successfully",
            data: userExists,
        });

    }
    catch (error) {
        return res.status(500).send({
            status: false,
            msg: error.message
        })
    }
};


//****************Create Plateform**************** */
const CreatePlateform = async function (req, res) {
    try {
        let data = req.body;
        let { id, plateform_name } = data;

        let plateform = await PlateformModel.create(data)
        res.status(201).send({
            status: true,
            message: "Plateform Created Successfully",
            data: plateform
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//************** Create Categories ******************/
const CreateCategories = async function (req, res) {
    try {
        let data = req.body;
        let { id, categories_name } = data;

        let categories = await CategoriesModel.create(data)
        res.status(201).send({
            status: true,
            message: "Categories Created Successfully",
            data: categories
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//*************Create SubCategories ****************/
const CreateSubCategories = async function (req, res) {
    try {
        let data = req.body;
        let { id, subcategories_name } = data;

        let subcategories = await SubCategoriesModel.create(data)
        res.status(201).send({
            status: true,
            message: "SubCategories Created Successfully",
            data: subcategories
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//***************User Language **************/
const UserLanguage = async function (req, res) {
    try {
        let data = req.body;
        let { id, language_name } = data;

        let Language = await LanguageModel.create(data)
        res.status(201).send({
            status: true,
            message: "Language Selected Successfully",
            data: Language
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//*******************Create Article************************/

const CreateArticle = async function (req, res) {
    try {
        let data = req.body;
        let { plateform, categories, sub_categories, language, take_images, date, expiry_date, agencies, new_title, meta_keywords, heading, short_details, description } = data;

        let Article = await ArticleModel.create(data)
        res.status(201).send({
            status: true,
            message: "Article Created Successfully",
            data: Article
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}


//****************Media type**********************/
const createMediaModel = async function (req, res) {
    try {
        let data = req.body;
        let { id, media_type } = data;

        let Media = await MediaModel.create(data)
        res.status(201).send({
            status: true,
            message: "Media type Created Successfully",
            data: Media
        })
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
}




module.exports = { userLogin, createUser, createMediaModel, CreatePlateform, CreateCategories, CreateSubCategories, UserLanguage, CreateArticle, getStates, ContactModel,UserModel, UserroleModel,status,SocialBio,SelectModel,CheckBoxModel,MOUTermsModel}



