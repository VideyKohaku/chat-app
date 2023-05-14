const UserModel = require("../Models/User.model");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');


class UserController {
    static async createToken(_id) {
        const jwtKey = process.env.JWT_SECRET_KEY;

        return jwt.sign({ _id }, jwtKey, { expiresIn: "2d" });
    }

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



    static async loginUser(req, res){
        try{
            const {email, password} = req.body;

            const user = await UserModel.findOne({email})
            if(!user){
                return res.status(400).json("Email or password not correct")
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
}

module.exports = UserController;