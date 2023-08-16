const mongoose = require("mongoose");

const mongoURL = process.env.DATABASE;

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Mongoose");
}).catch((err) => {
    console.log('Connection to Mongoose failed! '+err)
})