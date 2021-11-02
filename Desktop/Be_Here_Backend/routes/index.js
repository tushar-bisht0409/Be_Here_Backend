
const express = require("express");
const authenticate_action = require("../methods/authenticate_action");
const user_action = require("../methods/user_action");
const subject_action = require("../methods/subject_action");
const class_action = require("../methods/class_action");
const otp_action = require("../methods/otp_action");
const router = express.Router();

// POST / Adding New User(SIGN UP)
router.post('/adduser', authenticate_action.addNew);

// POST / Authenticating User(LOG IN)
router.post('/authenticate', authenticate_action.authenticate); 

// POST / Saving New User Information
router.post('/saveuserinfo', user_action.postUserInfo);

// POST / Creating a Subject
router.post('/createsubject', subject_action.postSubject);

// POST / Add Teacher to a Subject
router.post('/addteacher', subject_action.addTeacher);

// POST / Creating a Class
router.post('/createclass', class_action.postClass);

// POST / Posting Student List By A Student Who Is In Class
router.post('/studentsinclass', class_action.studentsInClass);

// POST / Present And Absent Action In a Class
router.post('/presentabsent', class_action.presentAbsent);

// POST / Creating a New OTP
router.post('/createotp', otp_action.postOTP);

// POST / Deleting OTP
router.post('/deleteotp', otp_action.deleteOTP);

// GET / Getting User Information
router.get('/getuserinfo', user_action.getUserInfo);

// GET / Getting Subject Information
router.get('/getsubject', subject_action.getSubject);

// GET / Getting Class Information
router.get('/getclass', class_action.getClass);

// GET / Getting OTP
router.get('/getotp', otp_action.getOTP);

module.exports = router;