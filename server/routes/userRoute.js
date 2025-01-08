const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  findAllUsers,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find/:userID", findUser);
router.get("/all", findAllUsers);

module.exports = router;
