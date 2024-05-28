import express from "express";
import usermodel from "./models/user.js"
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.get('/',(req, res)=>{
    res.render('index')
})

app.get('/login',(req,res)=>{
    res.render('login')
})
app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body
    const registervalue  = await usermodel.create(name,email,password);

    res.redirect('/login')
})
app.listen(5000,()=>{
    console.log('server is running on port 5000')
})