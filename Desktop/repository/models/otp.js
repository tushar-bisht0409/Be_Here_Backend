const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    otp: {
        type: String,
        require: false
    },
    email: {
        type: String,
        require: false
    },
    expire_at: {
        type: Date,
        default: Date.now(),
        expires: 600
    }
},
{
    timestamps: true,
});


module.exports = mongoose.model("OTPs", otpSchema);