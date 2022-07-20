const express = require("express");

const destinationsController = require("../controllers/destinationsController");

const router = express.Router();

router.get("/", destinationsController.getAll);
router.get("/:id", destinationsController.getOne);
router.post("/", destinationsController.createOne);
router.put("/:id", destinationsController.updateOne);
router.delete("/:id", destinationsController.deleteOne);

module.exports = router;
