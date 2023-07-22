const express = require("express");
const router = express.Router();
const {
    saveOffer,
    getOfferById,
    getOffers,
    updateOffer,
    deleteOffer,
} = require("../controllers/offers.controller");

router.get("/", getOffers);

router.get("/:id", getOfferById);

router.post("/", saveOffer);

router.put("/:id", updateOffer);

router.delete("/:id", deleteOffer);
 
module.exports = router;