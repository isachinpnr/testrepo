// src/routes/auth.js
const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    // Placeholder for Day 3 logic
    res.json({ message: "Login endpoint reached" });
});

module.exports = router;