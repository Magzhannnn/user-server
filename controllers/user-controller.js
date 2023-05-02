const User = require("../models/user-module");

const handleError = (res, err) => {
  res.status(500).json(err);
};

const getUsers = (req, res) => {
  User.find()
    .sort({ age: -1 })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => handleError(res, err.message));
};

const getUser = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => handleError(res, err.message));
};

const deleteUser = (req, res) => {
  const id = req.params.id;

  User.findByIdDelete(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => handleError(res, err.message));
};

const addUser = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => handleError(res, err.message));
};

const updateUser = (req, res) => {
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body)
    .then((result) => res.status(200).json(result))
    .catch((err) => handleError(res, err.message));
};

module.exports = {
  getUsers,
  getUser,
  deleteUser,
  addUser,
  updateUser
};
