const Questions = require('./models/questionSchema');
const Result = require('./models/answerSchema');

async function getQuestions(req, res) {
    try {
        const ques = await Questions.find();
        res.status(200).json(ques);
    }catch(error){
        res.json({error});
        console.error(error);
    }
}

async function insertQuestions(req, res) {
    try{
        Questions.insertMany({questions ,answers},function(err,data){
            res.json("Data saved successfully");
        })
    }catch(error){
        res.json({error});
    }
}
async function insertquestion(req,res){
    try{
        const ques = new Questions(req.body);
        ques.save()
            .then((result)=>{
                console.log("Saved succesfully",result);
                res,json(result);
            })
            .catch((error)=>{
                console.log(console.error(error));
                res.json(error);
            })
    }catch(err){
        res.json(err);
    }
}

async function deleteQuestions(req, res) {
    try{
        await Questions.deleteMany();
        res.json({msg: "Deleted successfully"});
    }catch(error){
        res.json({error});
    }
}

async function getResults(req, res) {
    try{
        const results = await Result.find();
        res.json(results);
    }catch(error){
        res.json({error});
    }
}

async function insertResults(req, res) {
    try{
        const {UserName,result,Attempts,points,achieved} = req.body;
        if(!UserName && !result){
            throw new Error("UserName and Result are required");
        }
        Result.create({UserName,result,Attempts,points,achieved});
        res.json({msg:"inserted Successfully"})
        }catch(error){
            res.json({error});
    }
}

async function deleteResults(req, res) {
    try{
        await Result.deleteMany();
        res.json({msg:"Successfully deleted"});
    }catch(error){
        res.json(error);
    }
}

module.exports = {
    getQuestions,
    insertQuestions,
    insertquestion,
    deleteQuestions,
    getResults,
    insertResults,
    deleteResults,
}