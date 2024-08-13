const express = require("express")
const { getProducts, getProduct, updateProduct, deleteProduct, createProduct } = require("../controllers/productController")

const productRouter = express.Router()

productRouter
.get("/", getProducts)
.get("/:id", getProduct)
.put("/:id", updateProduct)
.delete("/:id", deleteProduct)
.post("/", createProduct)

module.exports = { productRouter }