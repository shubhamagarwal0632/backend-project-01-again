import mongoose from "mongoose";

mongoose.connect('mongodb+srv://allinone1creater:yZcMFEN7xScca50R@webdevmastry.qdmg1eg.mongodb.net/').then(()=>{
    console.log('mongodb is connected done............')
})

const userschemas = mongoose.Schema({
    name:String,
    email:String,
    password:String   
})

export default mongoose.model('authnew', userschemas);