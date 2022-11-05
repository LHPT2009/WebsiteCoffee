const positionController = require("../controllers/PositionController");

const router = require("express").Router();

router.get("/", positionController.getAllPosition);

router.get("/:id", positionController.getPositionById);

router.delete("/:id", positionController.deletePosition);

router.post("/", positionController.addPosition);

router.put("/:id", positionController.updatePosition);

module.exports = router;