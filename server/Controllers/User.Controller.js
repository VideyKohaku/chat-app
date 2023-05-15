const UserModel = require("../Models/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const {pickFields} = require('../Utils/pickFields');


class UserController {
    static async #formatUsers(users){
        const fields = ["_id", "name", "email"];
        const formatUsers = await Promise.all(users.map( async (user) => {
            const newUser = await pickFields(user, fields);
            const userToken = await UserController.createToken(newUser._id);
            const formatUser = {...newUser, "token": userToken} 
            return formatUser;
        } ));
        return formatUsers;
    }

    static async #getUsers(fields){
        const users = await UserModel.find(fields).lean();

        const formatUsers = await UserController.#formatUsers(users);
        return formatUsers;
    }



    static async createToken(_id) {
        const jwtKey = process.env.JWT_SECRET_KEY;

        return jwt.sign({ _id }, jwtKey, { expiresIn: "2d" });
    }


    // PUBLIC METHOD

    // register
    static async registerUser(req, res) {
        try {
            const { name, email, password } = req.body;

            // error
            const user = await UserModel.findOne({ email });
            if (user) {
                return res.status(400).json("User with this email already exist...");
            }
            if (!name || !email || !password) {
                return res.status(401).json("All fields are required...");
            }
            if (!validator.isEmail(email)) {
                return res.status(400).json("Ivalid Email...");
            }
            if (!validator.isStrongPassword(password)) {
                return res.status(400).json("Your Password is weak! Why so weak? Why so weak?")
            }
            
            
            // create new User
            const salt = await bcrypt.genSalt(10);
            const passwordHash = await bcrypt.hash(password, salt);
            const newUser = await UserModel.create({ name, email, password: passwordHash })
            
            // console.log("id new:", newUser._id);
            
            //  create Token
            const userToken = await UserController.createToken(newUser._id);
            return res.status(201).json({ id: newUser._id, name, email, token: userToken });
        }
        catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }


    // login
    static async loginUser(req, res){
        try{
            const {email, password} = req.body;

            const user = await UserModel.findOne({email})
            if(!user){
                return res.status(404).json("Email not found")
            }
            const isValidPassword = await bcrypt.compare(password, user.password);
            if(!isValidPassword){
                return res.status(400).json("Email or password not correct")
            }
            
            const userToken = await UserController.createToken(user._id);
            res.status(200).json({id: user._id, name: user.name, email, token: userToken})
        }
        catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }


    // get all users
    static async getAllUsers(req, res){
        try{
            const users = await UserController.#getUsers({});
            
            res.status(200).json(users);
        }
        catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }

    // get 1 user by ID
    static async findUser(req, res){
        try{
            const {userId} = req.params;
            const user = await UserController.#getUsers({"_id": userId});

            // console.log("user: \n", user);
            if (Object.keys(user).length === 0 || user.length === 0){
                return res.status(404).json("User not found");
            }

            res.status(200).json(user);
        }catch(error){
            console.log(error);
            res.status(500).json(error);
        }
    }
}   

module.exports = UserController;