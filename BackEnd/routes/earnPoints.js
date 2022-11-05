const earnPointsController = require("../controllers/EarnPointsController");

const router = require("express").Router();

router.get("/", earnPointsController.getAllEarnPoints);

router.get("/:id", earnPointsController.getEarnPointsById);

router.delete("/:id", earnPointsController.deleteEarnPoints);

router.post("/", earnPointsController.addEarnPoints);

router.put("/:id", earnPointsController.updateEarnPoints);

module.exports = router;