const database = require("../database/connection");

//Variable for the table name
const userTable = "users";

class UsersController {
  //Adds a new user to the table
  newUser(req, res) {
    const { uuid, name } = req.body;

    database
      .insert({ uuid, name })
      .table(userTable)
      .then((data) => {
        console.log(data);
        res.json({ message: "200 Ok: User inserted successfully!" });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //Retrieves all info from the table
  getUsers(req, res) {
    database
      .select("*")
      .table(userTable)
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  //Retrieve user by id
  getUserByID(req, res) {
    const uuid = req.params.id;

    database
      .select("*")
      .from(userTable)
      .where({ uuid: uuid })
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status(404);
        res.send(err);
      });
  }

  //Update on user name by id
  updateUserNameByID(req, res) {
    const uuid = req.params.id;
    const { name } = req.body;

    database
      .where({ uuid: uuid })
      .update({ name: name })
      .table(userTable)
      .then((data) => {
        res.json({ message: "User name updated successfully" });
      })
      .catch((err) => {
        res.status(404);
        res.send(err);
      });
  }

  //Delete user by id
  deleteUserByID(req, res) {
    const uuid = req.params.id;

    database
      .where({ uuid: uuid })
      .del()
      .table(userTable)
      .then((data) => {
        res.json({ message: "User deleted successfully" });
      })
      .catch((err) => {
        res.status(404);
        res.send(err);
      });
  }
}

module.exports = new UsersController();
