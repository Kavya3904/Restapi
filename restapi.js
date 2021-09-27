const express = require("express");
const app = express();
const db = require("./Database/subjects");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/subjects", async (req,res)=> {
    const sub = await db.create_subject(req.body);
    res.status(200).json({id : sub[0]});
});

app.get("/subjects", async (req,res)=> {
    const subjects = await db.get_subjects();
    res.status(200).json({subjects});
});
app.get("/subjects/:id", async (req,res)=> {
    const subjects_id = await db.get_subjects_id(req.params.id , req.body);
    res.status(200).json({subjects_id});
});


app.put("/subjects/:id", async (req,res)=> {
    const id = await db.add_subject(req.params.id, req.body);
    res.status(200).json({id});
});
app.delete("/subjects/:id", async (req,res)=> {
    await db.delete_subject(req.params.id);
    res.status(200).send("You have deleted the subject SUCCESSFULLY!");
});



app.listen(5004, ()=> console.log("port 5004 is running"));