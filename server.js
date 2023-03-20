const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const cors = require('cors');

// Schemas
const User = require("./Schemas/userProfile");

app.use(bodyParser.json());
app.use(cors());

const db = require('./config/keys').mongoURI;

//DB Connection
mongoose.connect(db).then(() => {
    console.log("MongoDB Connection Established");
}).catch((err) => {
    console.log(err);
});

app.post('/', async (req, res) => {
    const data = req.body;
    const user = new User({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        mobile: data.mobile,
        skills: data.skills
    });
    console.log(user);
    await user.save();
    res.send("user saved");
})

app.listen(PORT, () => {
    console.log("Running on -> ", PORT)
});