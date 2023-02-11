require("dotenv").config();
const express=require("express")
const cors=require("cors")
const path =require('path')
const contactForm = require("./route/contactForm")
const app =express();
 
// creating a middleware
app.use(express.json())
app.use(cors())

app.use("/", contactForm)

if(process.env.Node_ENV ==="production"){
    app.use(express.static("client/build"))
    app.get("*", (req,res)=>(
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    ))
}
const port =process.env.PORT || 3000;

app.listen(port, console.log(`server listening to port 3000`))




