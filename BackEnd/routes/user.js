const middlewareController = require("../middleware/middlewareController");
const userController = require("../controllers/userController");

const router = require("express").Router();

//router.get("/", middlewareController.verifyToken, userController.getAllUsers);

//router.delete("/:id", middlewareController.verifyTokenAndAdmin, userController.deleteUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.post("/", userController.addUser);

router.put("/:id", userController.updateUser);




module.exports = router;