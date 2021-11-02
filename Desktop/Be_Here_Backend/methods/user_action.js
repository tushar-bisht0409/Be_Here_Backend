
const UserInfo = require("../models/user_info");

var functions = {
    postUserInfo: function(req,res){
        var obj = req.body;
            var userinfo = new UserInfo({
                userID: obj.userID,
                mode: obj.mode,
                institute: obj.institute,
                instituteCode: obj.instituteCode,
                name: obj.name,
                rollNo: obj.rollNo,
                batch: obj.batch,
                course: obj.course,
                trade: obj.trade,
                section: obj.section,
            });
            userinfo.save(function(err, uinfo){
                if(err){
                    return res.json({
                        success: false,
                        msz: "Failed to Save"
                    });
                }
                else{
                            return res.json({
                                success: true,
                                msz: "Successfully Saved"
                            });
                                        }
            });
        
    },
    getUserInfo: function(req,res){
        var obj = req.query;
        UserInfo.find({
            userID: obj.userID
        }, function(err,userinfo){
            if(err) throw err;
                if(!userinfo){
                    return res.send({success: false, msz:"No UserInfo Found"});                  
                }
                else{
                    if(userinfo.length === 0){
                        return res.send({success: false, msz:"No UserInfo Found"});
                    }
                    else{
                        return res.send({success: true, msz: userinfo}); 
                }}
        });
    },
    enrollSubject: function(req,res){
        var obj = req.query;
        UserInfo.findOneAndUpdate(
            {
                userID: obj.userID
            },
            {
                $push: {
                    "subjectIDs": obj.subjectID,
                }
            },
            function(err,userinfo){
            if(err) throw err;
                if(!userinfo){
                    return res.send({success: false, msz:"No UserInfo Found"});                  
                }
                else{
                    if(userinfo.length === 0){
                        return res.send({success: false, msz:"No UserInfo Found"});
                    }
                    else{
                        return res.send({success: true, msz: userinfo}); 
                }}
        });
    },
}

module.exports = functions;