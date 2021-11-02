const Classo = require("../models/class");

var functions = {
    postClass: function(req,res){
        var obj = req.body;
            var classinfo = new Classo({
                classID: obj.classID,
                subjectID: obj.subjectID,
                teacher: obj.teacher,
                timing: obj.timing,
            });
            classinfo.save(function(err, sub){
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
    getClass: function(req,res){
        var obj = req.query;
        if(obj.getBy === "subjectID"){
            Classo.find({
            subjectID: obj.subjectID
        }, function(err,cls){
            if(err) throw err;
                if(!cls){
                    return res.send({success: false, msz:"No Class Found"});                  
                }
                else{
                    if(cls.length === 0){
                        return res.send({success: false, msz:"No Class Found"});
                    }
                    else{
                        return res.send({success: true, msz: cls}); 
                }}
        });
    }
    else if(obj.getBy === "classID"){
        Classo.find({
            classID: obj.classID
        }, function(err,cls){
            if(err) throw err;
                if(!cls){
                    return res.send({success: false, msz:"No Class Found"});                  
                }
                else{
                    if(cls.length === 0){
                        return res.send({success: false, msz:"No Class Found"});
                    }
                    else{
                        return res.send({success: true, msz: cls}); 
                }}
        });
    }
    },
    studentsInClass: function(req,res){
        var obj = req.body;
        Classo.findOneAndUpdate(
                {
                    classID: obj.classID
                },
                {
                    $push: {
                        "students": obj.students,
                    }
                },
                function(err,stud){
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
},
calculateAttendance: function(req,res){
    var obj = req.body;
    Classo.find({
        classID: obj.classID
    }, function(err,cls){
        if(err) throw err;
            if(!cls){
                return res.send({success: false, msz:"No Class Found"});                  
            }
            else{
                if(cls.length === 0){
                    return res.send({success: false, msz:"No Class Found"});
                }
                else{
                    var studentsList = cls[0]['students'];
                    var byStudentList = [];
                    var allStudents = [];
                    var uniqueStudents = [];
                    var studentPresent = [];

                    for(var i = 0; i<studentsList.length; i++){
                        let tempList = [];
                        if(byStudentList.includes(studentsList[i]['byStudentID'])===false){
                            byStudentList.push(studentsList[i]['byStudentID']);
                            tempList = studentsList[i]['studentIDs'];
                            for(var j = 0; j<tempList.length; j++){
                                if(uniqueStudents.includes(tempList[j])===false){
                                    uniqueStudents.push(tempList[j]);
                                }
                            }
                        }
                        allStudents.concat(tempList);
                    }
                    var thresholdFrequency = Math.floor(0.2 * Number(obj.strength));
                    for(var k = 0; k<uniqueStudents.length; k++){
                       let tempID = uniqueStudents[k];
                       let tempFreq = 0;
                       for (let l = 0; l < allStudents.length; l++) {
                           if(allStudents[l] === tempID){
                               tempFreq++;
                           }
                       }
                       if(tempFreq >= thresholdFrequency){
                        studentPresent.push(uniqueStudents[k]);
                       }
                    }
                    Classo.findOneAndUpdate(
                        {
                            classID: obj.classID
                        },
                        {
                                "studentPresent": studentPresent,
                            },
                        function(err,stud){
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
    });
},
presentAbsent: function(req,res){ 
    var obj = req.body;
    if(obj.type === "present"){
        Classo.findOneAndUpdate(
            {
                classID: obj.classID
            },
            {
                $push: {
                    "studentPresent": obj.studentID,
                }
                },
            function(err,stud){
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
    else if(obj.type === "absent"){
        Classo.findOneAndUpdate(
            {
                classID: obj.classID
            },
            {
                $pull: {
                    "studentPresent": obj.studentID,
                }
                },
            function(err,stud){
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
    else if(obj.type === "allpresent"){
        Classo.findOneAndUpdate(
            {
                classID: obj.classID
            },
            {
                    "studentPresent": obj.studentPresent,
                },
            function(err,stud){
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

}

module.exports = functions;