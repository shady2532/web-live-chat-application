const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  findAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", findAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userID", findUser);

module.exports = router;
