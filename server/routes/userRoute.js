const express = require("express");

const router = express.Router();

router.post("/register", (require, response) =>{
    response.send("Register");
});

module.exports = router;