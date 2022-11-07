const disCountController = require("../controllers/disCountController");

const router = require("express").Router();

router.get("/", disCountController.getAllDisCount);

router.get("/:id", disCountController.getDisCountById);

router.delete("/:id", disCountController.deleteDisCount);

router.post("/", disCountController.addDisCount);

router.put("/:id", disCountController.updateDisCount);

module.exports = router;