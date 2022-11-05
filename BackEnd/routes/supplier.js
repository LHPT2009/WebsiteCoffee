const supplierController = require("../controllers/SupplierController");

const router = require("express").Router();

router.get("/", supplierController.getAllSupplier);

router.get("/:id", supplierController.getSupplierById);

router.delete("/:id", supplierController.deleteSupplier);

router.post("/", supplierController.addSupplier);

router.put("/:id", supplierController.updateSupplier);

module.exports = router;