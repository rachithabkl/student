const mongoose=require('mongoose');
const MongoURI="mongodb://127.0.0.1/mern2020"
const ConnectToMongo=async()=>{
    try{
        await mongoose.connect(MongoURI);
        console.log('connect to mongo is successful.');
    }
    catch(err){
        console.log('connect to mongo is Unsuccessful.',err);
    }
}
module.exports=ConnectToMongo;