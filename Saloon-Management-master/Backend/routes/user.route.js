const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { getUser, login, register, getUsers, getUserById, updateUser, deleteUser, addUser } = require("../controllers/User.controller");

//@route  GET api/user
//@desc   get user
//@access Private
router.get("/", auth, getUser);

//@route  GET api/user/login
//@desc   login
//@access Public
router.post("/login", login);

//@route  POST api/user/register
//@desc   register user
//@access Public
router.post("/register", register);

//@route  POST api/user/add
//@desc   register user
//@access Public
router.post("/add", addUser);

//@route  GET api/user/all
//@desc   get all users
//@access Public
router.get("/all", getUsers);

//@route  GET api/user
//@desc   get user by Id
//@access Public
router.get("/:id", getUserById);

//@route  PUT api/user/edit/:id
//@desc   Update user by Id
//@access Private
router.put("/edit/:id", updateUser);

//@route  DELETE api/user/delete/:id
//@desc   Delete user by Id
//@access Private
router.delete("/delete/:id", deleteUser);

module.exports = router;