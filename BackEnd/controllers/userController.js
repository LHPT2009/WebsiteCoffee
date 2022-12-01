const User = require('../models/User');

const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const user = await User.find().populate('role', ['rolename']);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('Delete successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUserById: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  addUser: async (req, res) => {
    try {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.roleId,
      });

      await newUser.save();
      res.status(200).json('Add successfully');
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const updateUser = req.body;
      const user = await User.findByIdAndUpdate(req.params.id, updateUser, {
        new: true,
      });

      if (!user) {
        return res.status(404).json('Wrong updateUser!');
      }
      res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json('Error!!!');
    }
  },
};

module.exports = UserController;
