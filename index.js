const express = require('express');
const employeeschema = require("./model/employee");
const app=express();
const port=3000;
app.use(express.json());
const studentroute=require('./route/stdroute');
const Task= require('./Task1.js');
const ConnectToMongo = require('./db.js');
const Task2=require
Task()
// Task2(10,20);
ConnectToMongo()
app.listen(port,()=>{
    console.log(`app is listenning on port ${port}`);
})
const employee=[
    {name:'xyz',age:20,role:'SE',email:'xyz@gmail.com'},
    {name:'xyz',age:20,role:'SE',email:'xyz@gmail.com'},
    {name:'xyzvkndf',age:20,role:'SE',email:'xyz@gmail.com'}
]
app.get('/employee',(req,res)=>{
    res.send(employee);
})
app.use('/api/student',studentroute);
app.post("/insert",async(req,res)=>{
    try{
        const {names,emails,roles,age}=req.body
        const datas= await new employeeschema({
            name:names,
            email:emails,
            role:roles,
            age:age
        });
        const savedata=await datas.save();
        res.send(savedata);
    } catch(error){
        console.log(error)
        res.status(500).send("internal some error occured");
    }

});

