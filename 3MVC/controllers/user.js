const UserModel = require("../models/mongodb/user/user");

exports.findAll = (req, res) => {
  UserModel.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: `Failed to get data`,
      });
    });
};

exports.create = (req, res) => {
  const user = new UserModel({
    username: req.body.username,
    password: req.body.password,
    fullname: req.body.fullname,
    email: req.body.email,
    age: req.body.age,
    description: req.body.description,
  });

  user
    .save(user)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: `Failed to get data`,
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  UserModel.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: `Failed to get data`,
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "User not found",
        });
      }

      res.send({
        message: "User was updated",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: `Failed to get data`,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  UserModel.findByIdAndRemove(id)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "User not found",
        });
      }

      res.send({
        message: "User was deleted",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || "Some error while delete user.",
      });
    });
}; 