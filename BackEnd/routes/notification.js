const notificationController = require("../controllers/notificationController");

const router = require("express").Router();

router.get("/", notificationController.getAllNotifications);
router.get("/:id", notificationController.getNotificationById);
router.post("/", notificationController.addNotification);
router.put("/:id", notificationController.updateNotification);

module.exports = router;