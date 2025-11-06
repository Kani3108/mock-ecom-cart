const express = require("express");
const router = express.Router();
const products = require("../data/products");

let cart = [];

router.post("/", (req, res) => {
  const { productId, qty } = req.body;
  const product = products.find(p => p.id === productId);
  if (product) {
    const existing = cart.find(item => item.product.id === productId);
    if (existing) existing.qty += qty;
    else cart.push({ product, qty });
  }
  res.json(cart);
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  cart = cart.filter(item => item.product.id !== id);
  res.json(cart);
});

router.get("/", (req, res) => {
  const total = cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  res.json({ cart, total });
});

module.exports = router;