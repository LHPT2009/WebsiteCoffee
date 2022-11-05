const sizeProductController = require("../controllers/SizeProductController");

const router = require("express").Router();

router.get("/", sizeProductController.getAllSizeProduct);

router.get("/:id", sizeProductController.getSizeProductById);

router.delete("/:id", sizeProductController.deleteSizeProduct);

router.post("/", sizeProductController.addSizeProduct);

router.put("/:id", sizeProductController.updateSizeProduct);

module.exports = router;