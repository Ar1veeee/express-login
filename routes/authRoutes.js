const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/authController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", register);
router.post("/login", login);

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "Selamat datang di endpoint yang dilindungi!",
    user: req.user,
  });
});

module.exports = router;
