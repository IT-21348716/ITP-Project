const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const jwt = require("jsonwebtoken");

//Get User details
const getUser = async (req, res) => {
  try {
    //get user details
    //-password : dont return the pasword
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
};

//Authenticate user and get token
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    //See if user Exist
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    //match the user email and password

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    //Return jsonwebtoken

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "mysecrettoken", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

//Register admin
const register = async (req, res) => {
  const { userName, email, password, address, contactNumber } = req.body;

  try {
    //See if user Exist
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    //create a user instance
    user = new User({
      userName,
      email,
      password,
      address,
      contactNumber,
    });

    //Encrypt Password

    //10 is enogh..if you want more secured.user a value more than 10
    const salt = await bcrypt.genSalt(10);

    //hashing password
    user.password = await bcrypt.hash(password, salt);

    //save user to the database
    await user.save();

    //Return jsonwebtoken

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, "mysecrettoken", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(500).send("Server Error" + error);
  }
};

const updateUser = async (req, res) => {
  User.findByIdAndUpdate(req.params.id)
    .then((existingUser) => {
      existingUser.userName = req.body.userName;
      existingUser.contactNumber = req.body.contactNumber;
      existingUser.address = req.body.address;
      existingUser
        .save()
        .then((updatedUser) => res.json(updatedUser))
        .catch((error) => res.status(400).json("Error: " + error));
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const deleteUser = async (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      res.json(deletedUser);
    })
    .catch((error) => res.status(400).json("Error: " + error));
};

const addUser = async (req, res) => {
  const { userName, email, password, address, contactNumber } = req.body;

  try {
    //See if user Exist
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ error: "User already exist" });
    }

    //create a user instance
    user = new User({
      userName,
      email,
      password,
      address,
      contactNumber,
    });

    //Encrypt Password

    //10 is enogh..if you want more secured.user a value more than 10
    const salt = await bcrypt.genSalt(10);

    //hashing password
    user.password = await bcrypt.hash(password, salt);

    //save user to the database
    await user
      .save()
      .then((savedData) => {
        res.json(savedData);
      })
      .catch((error) => res.status(500).send("Server Error" + error));
  } catch (err) {
    //Something wrong with the server
    console.error(err.message);
    return res.status(500).send("Server Error");
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUser,
  login,
  register,
  addUser
};
