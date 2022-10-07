const authController = require("../auth/authControllers");
const middlewareController = require("../middleware/middlewareController");

const router = require("express").Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/refresh", authController.requestRefreshToken);

router.post("/logout", middlewareController.verifyToken, authController.userLogout);

module.exports = router;