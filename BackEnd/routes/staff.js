const staffController = require("../controllers/StaffController");

const router = require("express").Router();

router.get("/", staffController.getAllStaff);

router.get("/:id", staffController.getStaffById);

router.delete("/:id", staffController.deleteStaff);

router.post("/", staffController.addStaff);

router.put("/:id", staffController.updateStaff);

module.exports = router;