const authController = require("../auth/authControllers");
const middlewareController = require("../middleware/middlewareController");

const router = require("express").Router();

router.post("/register", authController.registerUser);

router.post("/login", authController.loginUser);

router.post("/google", authController.loginGoogle);

router.get("/confirm/:id", authController.confirmEmail);

module.exports = router;