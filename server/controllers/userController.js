const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const validator = require("validator");
const jsonwebtoken = require("jsonwebtoken");

const createToken = (_id) => {
  const key = process.env.JWT_KEY_SECRET;

  return jsonwebtoken.sign({ _id }, key, { expiresIn: "3d" });
};

const registerUser = async (request, response) => {
  try {
    const { name, email, password } = request.body;

    let user = await userModel.findOne({ email });

    if (user)
      return response
        .status(400)
        .json({ message: "User with the given email already exists!" });
    if (!name || !email || !password)
      return response.status(400).json({ message: "All fields are required!" });
    if (!validator.isEmail(email))
      return response.status(400).json({ message: "Email is not valid!" });
    if (!validator.isStrongPassword(password))
      return response
        .status(400)
        .json({ message: "Create a stronger password!" });

    user = new userModel({ name, email, password });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = createToken(user._id);

    response.status(200).json({ _id: user._id, name, email, token });
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

const loginUser = async (request, response) => {
  const { email, password } = request.body;
  try {
    let user = await userModel.findOne({ email });

    if (!user) return response.status(400).json("Invalid Email or Password!");

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword)
      return response.status(400).json("Invalid Email or Password!");

    const token = createToken(user._id);
    response.status(200).json({ _id: user._id, name: user.name, email, token });
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

const findUser = async (request, response) => {
  const userID = request.params.userID;
  try {
    const user = await userModel.findById(userID);

    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

const findAllUsers = async (request, response) => {
  try {
    const user = await userModel.find();
    response.status(200).json(user);
  } catch (error) {
    console.log(error);
    response.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, findUser, findAllUsers };
