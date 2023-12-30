const connection = require("../database/connection");
const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/UsersController");

//Routes access for the controllers
router.get("/users", UsersController.getUsers);
router.get("/user/:id", UsersController.getUserByID);
router.post("/user", UsersController.newUser);
router.put("/user/:id", UsersController.updateUserNameByID);
router.delete("/user/:id", UsersController.deleteUserByID);

module.exports = router;
