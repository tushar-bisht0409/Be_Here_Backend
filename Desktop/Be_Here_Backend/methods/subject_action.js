
const Subject = require("../models/subject");

var functions = {
    postSubject: function(req,res){
        var obj = req.body;
            var subjectinfo = new Subject({
                subjectID: obj.subjectID,
                subjectSubID: obj.subjectSubID,
                institute: obj.institute,
                instituteCode: obj.instituteCode,
                subjectName: obj.subjectName,
                teacherIDs: [obj.teacherID],
                batch: obj.batch,
                course: obj.course,
                trade: obj.trade,
                section: obj.section,
            });
            subjectinfo.save(function(err, sub){
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
    getSubject: function(req,res){
        var obj = req.query;
        if(obj.getBy === "subjectID"){
        Subject.find({
            subjectID: obj.subjectID
        }, function(err,sub){
            if(err) throw err;
                if(!sub){
                    return res.send({success: false, msz:"No Subject Found"});                  
                }
                else{
                    if(sub.length === 0){
                        return res.send({success: false, msz:"No Subject Found"});
                    }
                    else{
                        return res.send({success: true, msz: sub}); 
                }}
        });
    }
    else if(obj.getBy === "teacherID"){
        Subject.find({
            teacherIDs: obj.teacherID
        }, function(err,sub){
            if(err) throw err;
                if(!sub){
                    return res.send({success: false, msz:"No Subject Found"});                  
                }
                else{
                    if(sub.length === 0){
                        return res.send({success: false, msz:"No Subject Found"});
                    }
                    else{
                        return res.send({success: true, msz: sub}); 
                }}
        });
    }
    else if(obj.getBy === "studentID"){
        Subject.find({
            students: obj.studentID
        }, function(err,sub){
            if(err) throw err;
                if(!sub){
                    return res.send({success: false, msz:"No Subject Found"});                  
                }
                else{
                    if(sub.length === 0){
                        return res.send({success: false, msz:"No Subject Found"});
                    }
                    else{
                        return res.send({success: true, msz: sub}); 
                }}
        });
    }
    else if(obj.getBy === "studentInfo"){
        Subject.find({
            institute: obj.institute,
                instituteCode: obj.instituteCode,
                batch: obj.batch,
                course: obj.course,
                trade: obj.trade,
                section: obj.section,
        }, function(err,sub){
            if(err) throw err;
                if(!sub){
                    return res.send({success: false, msz:"No Subject Found"});                  
                }
                else{
                    if(sub.length === 0){
                        return res.send({success: false, msz:"No Subject Found"});
                    }
                    else{
                        return res.send({success: true, msz: sub}); 
                }}
        });
    }
    },
    addTeacher: function(req,res){
        var obj = req.body;
            Subject.findOneAndUpdate(
                {
                    subjectID: obj.subjectID
                },
                {
                    $push: {
                        "teacherIDs": obj.newTeacherID,
                    }
                },
                function(err,sub){
        if(err) {
            return res.json({
                success: false,
                msz: "Failed to Save"
            });
        }
        else {
            return res.json({
                success: true,
                msz: "Successfully Saved"
            });
        }
    });
} 
}

module.exports = functions;