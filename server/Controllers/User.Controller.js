const UserModel = require("../Models/User.model");

class UserController {
    static registerUser = (req, res) => {
        res.send("Register")
    }
}

module.exports = UserController;