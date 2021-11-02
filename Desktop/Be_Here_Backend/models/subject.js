const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    subjectID: {
        type: String,
        require: false
    },
    subjectSubID: {
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
    subjectName: {
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
    students: [{
        studentID: String,
        studentName: String,
        studentRollNo: String,
    }],
    teacherIDs: [{
        type: String,
        require: false,
    }],
});

module.exports = mongoose.model("Subjects", subjectSchema);