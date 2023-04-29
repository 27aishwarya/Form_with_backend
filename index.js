const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const db = "mongodb+srv://27aishwaryayadav:27aishwaryayyy@cluster0.1do0fho.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(db).then(() => {
    console.log("The file is connected to database");
}).catch((e) => {
    console.log("The error in database connection is ", e);
})

app.use(cors());
app.use(express.json())
app.get("/", (req, res) => {
    res.send("hey")
})
const dataSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String }
})
const Data = mongoose.model("Data", dataSchema);







app.post("/hello", (req, res) => {
    try {
        console.log(req.body);
        const { name, email } = req.body;
        const data = Data.create({
            name, email
        }).then(() => {
            console.log("The data is saved successfully");
            res.send("Saved")
        }).catch((e) => {
            console.log("The error in database saving is ", e);
        })

    } catch (e) {
        console.log("The error is ", e);

    }
})
app.listen(4000, () => {
    console.log("the app is running successfully at port 4000")
})