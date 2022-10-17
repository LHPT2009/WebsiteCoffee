const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Role = require("../models/Role");

const middlewareController = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err, userId) => {
                if (err) {
                    return res.status(403).json("Token is not valid");
                }
                req.userId = userId;
                next();
            });
        }
        else {
            return res.status(500).json("You're not authenticated");
        }
    },

    AuthAdmin: async (req, res, next) => {
        try {
            const user = await User.findById(req.userId.id).populate('role');
            if (user.role.rolename == 'Admin' || user.role.rolename == 'SuperAdmin') {
                next();
            } else {
                return res.status(400).json("You're not Admin");
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json("Server Error!!!");
        }
    },

    AuthSuperAdmin: async (req, res, next) => {
        try {
            const user = await User.findById(req.userId.id).populate('role');
            if (user.role.rolename == "SuperAdmin") {
                next();
            } else {
                return res.status(403).json("You're not Super Admin");
            }
            next();
        } catch (error) {
            return res.status(500).json("Server Error!!!");
        }
    },
};

module.exports = middlewareController;