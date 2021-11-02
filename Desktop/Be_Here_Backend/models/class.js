const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subjectSchema = new Schema({
    classID: {
        type: String,
        require: false
    },
    subjectID: {
        type: String,
        require: false
    },
    teacher: {
        teacherID: String,
        teacherName: String,
    },
    students: [{
        studentIDs: Array,
        byStudentID: String,
    }],
    studentPresent: [{
        type: String,
        require: false,
    }],
    timing: {
        type: String,
        require: false
    },
},{
    timestamps: true,
});

module.exports = mongoose.model("Subjects", subjectSchema);