const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { productRouter } = require("./routes/productRoutes")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use("/api/products", productRouter)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to database")
        app.listen(process.env.PORT, () => {
            console.log(`Server running at ${process.env.PORT}`)
        })
    })
    .catch(() => {
        console.log("Failed to connect to database")
    })