const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 8070;

//Default Route
app.get('/', (req, res) => {
  res.send('Saloon Management Service Backend API Running');
})

//Connect with Mongodb
connectMongoDB().then(() => console.log("MongoDB connected successfully")).catch(err => console.log(err));

async function connectMongoDB() {
  await mongoose.connect('mongodb+srv://senura:senura8864@devconnector.y7pfp.mongodb.net/saloon?retryWrites=true&w=majority');
}

//Route Configurations
app.use('/api/admin', require('./routes/admin.route'));
app.use('/api/user', require('./routes/user.route'));
app.use('/api/offers', require('./routes/offer.route'));
app.use('/api/transactions', require('./routes/transaction.route'));

//Start the node application
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
})