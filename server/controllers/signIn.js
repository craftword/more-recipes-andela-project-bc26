import models from "../models";
import bcrypt from "bcrypt";

const createUser = models.Users;


const signIn = (req, res) => {

    return createUser
        .findOne({
            where: {
                username:req.body.username,                   
            }
        })
        .then(user => {
            if(user === null) {
                res.json({ success: false, message: "Authentication failed. User not found." });
            }
            //to compare password that user supplies in the future
            let hash = user.password;
            bcrypt.compare(req.body.password, hash, (err, doesMatch)=>{
                if (doesMatch){
                    
                    res.status(200).json({
                        success: true,
                        userId:user.id,
                        message: "Welcome Home!",
                        
                    });

                }else{
                //go away
                    res.status(403).json({ success: false, message: "Authentication failed. Wrong password." });
                }
            });
        });
    

};

export default signIn;