const Offer = require("../models/Offers.model");
const User = require("../models/User.model");
const { sendEmailNodemailer } = require("../util/sendmail");

const saveOffer = async (req, res) => {
  const { title, description } = req.body;

  const offer = new Offer({
    title,
    description,
  });

  //Save to mongodb database
  offer
    .save()
    .then((savedData) => {
      //send mail to all registered customers
      User.find({}, { email: 1 })
        .then(async (customers) => {
          // Print all email addresses
          customers.forEach((customer) => {
            console.log(customer.email);
            sendEmailNodemailer(
              customer.email,
              title,
              description
            );
          });
          await res.json(savedData);
        })
        .catch((error) => {
          console.error(error);
        });
    })
    .catch((error) => res.status(500).send("Server Error" + error));
};

const getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    res.json(offers);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getOfferById = async (req, res) => {
  try {
    const offer = await Offer.findById(req.params.id);
    res.json(offer);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateOffer = async (req, res) => {
  Offer.findByIdAndUpdate(req.params.id)
    .then((existingData) => {
      existingData.title = req.body.title;
      existingData.description = req.body.description;
      //Save the changes from request to database
      existingData
        .save()
        .then((updatedData) => res.json(updatedData))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteOffer = async (req, res) => {
  Offer.findByIdAndDelete(req.params.id)
    .then((deletedData) => {
      res.json(deletedData);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

module.exports = {
  saveOffer,
  getOfferById,
  getOffers,
  updateOffer,
  deleteOffer,
};
