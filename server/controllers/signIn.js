import models from "../models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"; // used to create, sign, and verify tokens
const createUser = models.Users;
//Authentication
const secret = "ilovescotchyscotch";

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
                    // if user is found and password is right
                    // create a token
                    // expire in one hour
                       
                    const token = jwt.sign({exp: Math.floor(Date.now() / 1000) + (60 * 60), data:user.username}, secret);
                    //console.log(token);
                    // return the information including token as JSON
                    res.status(200).json({
                        success: true,
                        userId:user.id,
                        message: "Welcome Home!",
                        token: token
                    });

                }else{
                //go away
                    res.status(403).json({ success: false, message: "Authentication failed. Wrong password." });
                }
            });
        });
    

};

export default signIn;