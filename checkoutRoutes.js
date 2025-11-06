const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { cartItems } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  res.json({
    message: "Mock checkout successful",
    total,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;