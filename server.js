
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/api/books", require("./routes/books"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(3000, () => {
            console.log("Server started on port 3000");
        });
    })
    .catch(err => console.log(err.message));
