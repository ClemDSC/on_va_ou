const express = require("express");

const destinationsController = require("../controllers/destinationsController");

const { validateDestination } = require("../middleware/validateDestination");

const router = express.Router();

router.get("/", destinationsController.getAll);
router.get("/:id", destinationsController.getOne);
router.post("/", validateDestination, destinationsController.createOne);
router.put("/:id", validateDestination, destinationsController.updateOne);
router.delete("/:id", destinationsController.deleteOne);

module.exports = router;
