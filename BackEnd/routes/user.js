const userController = require("../controllers/userController");

const router = require("express").Router();

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.delete("/:id", userController.deleteUser);

router.post("/", userController.addUser);

router.put("/:id", userController.updateUser);

module.exports = router;