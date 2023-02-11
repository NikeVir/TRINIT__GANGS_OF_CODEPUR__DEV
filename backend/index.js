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
        console.log(newORG)
        const org = await newORG.save();
        res.status(200).json(org);
    }
    catch(err){
        res.status(500).json(err)
    }
});


app.listen(8000,()=>{
    console.log("sever running on port 8000")
})