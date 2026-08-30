const router = require('express').Router();

const { registerUser, login } = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/signup", registerUser);

router.post("/login", login);

router.get("/me", authMiddleware, (req, res) => {
    res.json({
        message: "You are authenticated",
        userId: req.user
    });
});

module.exports = router;