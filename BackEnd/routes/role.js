const roleController = require("../controllers/roleController");

const router = require("express").Router();

router.get("/", roleController.getAllRoles);

router.get("/one", roleController.getRoleUser);

router.get("/:id", roleController.getRoleById);

router.delete("/:id", roleController.deleteRole);

router.post("/", roleController.addRole);

router.put("/:id", roleController.updateRole);

module.exports = router;