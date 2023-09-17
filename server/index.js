// const express = require("express");
// const cors = require("cors");
// const app = express();
// const mongoose = require("mongoose");

// // middlewares
// app.use(express.json());
// app.use(cors({
//     origin: "*"
//     // methods: 'GET,POST,PUT,DELETE'
// }));

// require("dotenv").config()

// const port = process.env.PORT || 5000;
// const uri = process.env.ATLAS_URI;

// // routes
// app.use("/", require("./route/index"))

// app.listen(port, (req, res) => {
//     console.log(`Sever is running on port: ${port}`)
// });

// // database
// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(()=>{
//     console.log("Connected to MongoDB server");
// }).catch((error)=>{
//     console.log("MongoDB connection fialed: ", error.message);
// })