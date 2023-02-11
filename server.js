require("dotenv").config();
const express=require("express")
const cors=require("cors")
//const path =require('path')
const contactForm = require("./route/contactForm")
const app =express();
 
// creating a middleware
app.use(express.json())
app.use(cors())

app.use("/", contactForm)


const port =process.env.PORT || 3000;

app.listen(port, console.log(`server listening to port 5000`))




