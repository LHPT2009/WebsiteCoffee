const jwt = require("jsonwebtoken");

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

    verifyTokenAndAdmin: async (req, res, next) => {
        try {
            middlewareController.verifyToken(req, res, () => {
                console.log(req.userId);
                const user = User.findOne({ _id: req.userId });
                console.log(user);
                if (req.user.id == req.params.id || req.user.admin) {
                    next();
                } else {
                    return res.status(403).json("you're not allowed to delete other");
                }
            });
        } catch (error) {

        }
    },
};

module.exports = middlewareController;