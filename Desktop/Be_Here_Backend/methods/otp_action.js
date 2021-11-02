const OTP = require("../models/otp");
const nodemailer = require("nodemailer");

var functions = {
    postOTP: function(req,res){
        var obj = req.body;
        var newOTP = Math.floor(Math.random()*(999999 - 100000 + 1)) + 100000;
            var otpinfo = new OTP({
                email: obj.email,
                otp: newOTP,
            });
            otpinfo.save(function(err, oinfo){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save"
                    });
                }
                else{
                    var emailData= "Your OTP for signing up in Be Here is " + newOTP ;
                    var smtpTransport = nodemailer.createTransport({
                        service: "hotmail",
                        auth: {
                        user: "clientrequest10@outlook.com",
                        pass: "pleasebepermanentK12#"
                    }});

   smtpTransport.sendMail({
   from: "clientrequest10@outlook.com",
   to: obj.email,
   subject: "Sign Up for BE HERE",
   text: JSON.stringify(emailData,null,5)
    }, function(error, response){
         if(error){
            smtpTransport.close();
            return res.send({success: false, msz:"Failed to send OTP"}); 
        }else{
            smtpTransport.close();
            return res.send({success: true, msz: "OTP successfully sent"}); 
       }
    });
                                        }
            });
        
    },
    getOTP: function(req,res){
        var obj = req.query;
        OTP.find({
            email: obj.email,
                otp: obj.otp,
        }, function(err,otpinfo){
            if(err) throw err;
                if(!otpinfo){
                    return res.send({success: false, msz:"No OTP Found"});                  
                }
                else{
                    if(otpinfo.length === 0){
                        return res.send({success: false, msz:"No OTP Found"});
                    }
                    else{
                        return res.send({success: true, msz: "Signed Up Successfully"}); 
                }}
        });
    },
    deleteOTP: function(req,res){
        var obj = req.body;
        OTP.findOneAndDelete({
            email: obj.email,
                otp: obj.otp,
        }, function(err,otpinfo){
            if(err) throw err;
                if(!otpinfo){
                    return res.send({success: false, msz:"No OTP Found"});                  
                }
                else{
                    if(otpinfo.length === 0){
                        return res.send({success: false, msz:"No OTP Found"});
                    }
                    else{
                        return res.send({success: true, msz: "OTP Deleted Successfully"}); 
                }}
        });
    },
}

module.exports = functions;