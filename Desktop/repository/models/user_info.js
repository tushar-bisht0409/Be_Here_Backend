const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userInfoSchema = new Schema({
    userID: {
        type: String,
        require: false
    },
    mode: {
        type: String,
        require: false
    },
    institute: {
        type: String,
        require: false
    },
    instituteCode: {
        type: String,
        require: false
    },
    name: {
        type: String,
        require: false
    },
    rollNo: {
        type: String,
        require: false
    },
    batch: {
        type: String,
        require: false
    },
    course: {
        type: String,
        require: false
    },
    trade: {
        type: String,
        require: false
    },
    section: {
        type: String,
        require: false
    },
    subjects: [{
        type: String,
        require: false,
    }],
});

module.exports = mongoose.model("User_Info", userInfoSchema);