const express = require ("express")
const mongoose = require("mongoose");
const { Print, Signup } = require("./routes/routes");

const port = 4000;
const app = express()


app.use(express.json())
app.get("/",Print)
app.post("/signup",Signup)
mongoose.connect("mongodb+srv://demo:dCMOlcENp7eNC3Bh@sample.uctx6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then((console.log("db connected"))).catch((err)=>{console.log(err)})





app.listen(port, ()=> {console.log("server is connected")
})