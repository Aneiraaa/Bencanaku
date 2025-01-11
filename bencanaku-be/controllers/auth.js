const User = require("../models/User.js");

const register = async (req, res) => {
    try {
      const { username, password, fullname } = req.body;
      const userExist = await User.findOne({ username });
      if (userExist) {
        return res.status(400).json({ message: "User already exists." });
      }
      const newUser = new User({ username, password, fullname });
      const savedUser = await newUser.save();

      res.status(201).json({
        message: "User registered successfully.",
        user: { username: savedUser.username, fullname: savedUser.fullname },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal Server Error." });
    }
  };

  const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
      const isMatch = await user.comparePassword(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password." });
      }

      res.status(200).json({ message: "Login successful.", user: { username: user.username, fullname: user.fullname } });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message || "Internal Server Error." });
    }
  };


  module.exports = { register, login };