const User = require("../models/user-model")
const bcrypt = require("bcryptjs");
// Home Logic
const home = async (req, res) => {
    try {
         res.status(200).send("IA Comeback");
    } catch (error) {
        console.log(error);
    }
}

// Registration Logic

const register = async (req, res) => {
    try {
        console.log(req.body);
        const {username,email,phone,password} = req.body;

        const userExist = await User.findOne({email:email})

        if(userExist){
            return res.status(400).json({message:"email already exist"});
        }
        // hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

      const userCreated=  await User.create({username,email,phone,password})

        const data = await User.find();

        // it is good to conver _id to string because it is in object form and we can not send it in json form
         res.status(200).json({ msg: "registration successful", token: await userCreated.generateToken(), userId:userCreated._id.toString() });
    } catch (error) {
        console.log(error);
        // res.status(400).send("Page not found");
        // after create error middleware we can send the error to error middleware
        next(error)
    }
}

// user Login logic

const login = async (req, res) => {
    try {
        const {email,password} = req.body;
        const userExist =  await User.findOne({email})
        console.log(userExist);
        if(!userExist){
            return res.status(400).json({message:"invalid email or password"});
        }
        // const user = await bcrypt.compare(password,userExist.password);
        const user = await userExist.comparePassword(password);
        
        if(user){
            res.status(200).json({
                msg:"login successful",
                token: await userExist.generateToken(),
                userId:userExist._id.toString()
            })
        }else{
            res.status(401).json({message:"Invalid email or password"})
        }
    } catch (error) {
        res.status(500).send("internal server error");
    }
}

// to send user data -user logic
const user = async(req,res)=>{
    try {
        const userData=req.user;
        console.log(userData);
      return  res.status(200).json({ userData});
    } catch (error) {
        console.log("error from the user route");
    }
}


module.exports = {home, register, login , user}