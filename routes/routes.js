const User = require("../models/user")

exports.Print=(req,res) => {
   return res.status(200).json({name:"mithlesh"})
    res.end()
}
exports.Signup=(req,res) => {
 
  
        const newUser = new User({
            firstName: req.body.firstName,
            lastName:req.body.lastName,
            email :req.body.email
            
        
        }); console.log("runnin",newUser);
        newUser.save((error,data )=>{
            if(error){
                return res.status(400).json({error})
            }
            if(data){
                return res.status(200).json({
                    user:data
                })
            }
        });
   
   
     

 }