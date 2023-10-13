const studentschema = require("../model/student");

const g =i;
const student=new;



const studentinsert = async (req,res)=>{
    try{
        const{name,phone,email,age}=req.body;
        const student = new studentschema({
            name,
            phone,
            email,
            age,

        });
        let.checkemail =await studentschema.findOne({email});
        if(checkemail){
            return res.status(400).json({error:"email already exist"});
        }
        const savedstudent = await student.save();
        res.send(savedstudent);
    }catch(error){
            console.error(error.message);
            res.status(500).send("internal some error occured");


        }
    
};
const DisplayStudent=async(req,res)=>{
    try{
        const student = await studentschema.find();
        res.json(student)
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("internal some error occured");
    }
};
const DeleteStudent = async(req,res)=>{
    try{
        let student = await studentschema.findById(req.params.id);
        if(!student){
            return res.status(404).send("not found");

        }
        student = await studentschema.findByIdAndDelete(req.params.id);
        res.json({success:"student deleted successfully",student:student});
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal some error occured");
    }
    
}
const Get_Single_Student = async(req,res)=>{
    try{
        const student=await studentschema.findById(req.params.id);
        if(!student){
            res.status(404).send("student not found");

        }
        res.json(student)
    }
    catch (error){
        console.error(error.message);
        res.status(500).send("internal some error occured");
    }
    const StudentUpdate = async(req,res)=>{
        const{name,age,email,department}=req.body;
        try{
            const newStudent={};
            if(name){newStudent.name=name};
            if(age){newStudent.age=age};
            if(email){newStudent.email=email};
            if(department){newStudent.department=department};
            let student=await studentschema.findById(req.params.id;{
            $set:newStudent},{new:true})
            res.json({student});

        }
        catch(error){
            console.error(error.message);
            res.status(500).send("internal some error occured")

        
    }
    }

    const DeleteStudent = async(req,res)=>{
        try{
            let student = await studentschema.findById(req.params.id);
            if(!student){
                return res.status(404).send("not found");
    
            }
            student = await studentschema.findByIdAndDelete(req.params.id);
            res.json({success:"student deleted successfully",student:student});
        }catch(error){
            console.error(error.message);
            res.status(500).send("internal some error occured");
        }
        
    }

    const DeleteStudenthhy = async(req,res)=>{
    try{
        let student = await studentschema.findById(req.params.id);
        if(!student){
            return res.status(404).send("not found");

        }
        student = await studentschema.findByIdAndDelete(req.params.id);
        res.json({success:"student deleted successfully",student:student});
    }catch(error){
        console.error(error.message);
        res.status(500).send("internal some error occured");
    }
    
}
    

module.exports={studentinsert,DisplayStudent,DeleteStudent,Get_Single_Student,StudentUpdate};