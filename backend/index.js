const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Organization = require("./models/Organization")
const User = require("./models/User")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const JWT_SECRET = "1234046"
const mongoose = require("mongoose");
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
app.use(cors(corsOptions)) // Use this after the variable declaration


app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }))
mongoose.connect("mongodb+srv://NikeVir:123NikeVir@cluster0.t4yhyls.mongodb.net/test", {useNewUrlParser: true,useUnifiedTopology: true})
    .then((result)=>console.log("Connected to DB"))
    .catch((err)=>console.log(err));

app.post("/register", async(req, res)=>{
    try{
        console.log(req.body)
        const emailExist = await Organization.findOne({email: req.body.email})
        if(emailExist) return response.status(400).send("email already exist")
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newORG = new Organization({
            Organization_name: req.body.Name,
            email: req.body.email,
            password: hashedPassword,
            intro:req.body.intro,
            desc:req.body.desc,
            minDonation:req.body.minDonation,
            Contacts:req.body.contacts
        });
        //save user and return response
        const org = await newORG.save();
        console.log(newORG)
        res.status(200).json(org);
    }
    catch(err){
        res.status(500).json(err)
    }
});
app.post("user/register", async(req, res)=>{
    try{
        console.log(req.body)
        const emailExist = await User.findOne({email: req.body.email})
        if(emailExist) return response.status(400).send("email already exist")
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        //create new user
        const newUser = new User({
            Name: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            Contacts:contacts
        });
        //save user and return response
        const user = await newUser.save();
        res.status(200).json(user);
    }
    catch(err){
        res.status(500).json(err)
    }
});

//LOGIN
app.post("org/login", async(req, res)=>{
    const  {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"please add email or password"})
    }
    Organization.findOne({email:email}).then(savedUser =>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Password or Email"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,username,email,profilePicture} =savedUser
                res.json({token,user:{_id,username,email,profilePicture}})

            }
            else{
                return res.status(422).json({error:"invalid Email or Password"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
});

app.post("user/login", async(req, res)=>{
    const  {email,password} = req.body
    if(!email || !password){
        return res.status(422).json({error:"please add email or password"})
    }
    User.findOne({email:email}).then(savedUser =>{
        if(!savedUser){
            return res.status(422).json({error:"Invalid Password or Email"})
        }
        bcrypt.compare(password,savedUser.password).then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,username,email,profilePicture} =savedUser
                res.json({token,user:{_id,username,email,profilePicture}})
            }
            else{
                return res.status(422).json({error:"invalid Email or Password"})
            }
        }).catch(err=>{
            console.log(err)
        })
    })
});
app.listen(8000,()=>{
    console.log("sever running on port 8000")
})