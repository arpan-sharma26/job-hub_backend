const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    mobile: Number,
    skills: {}
});

module.exports = mongoose.model("User", userSchema);