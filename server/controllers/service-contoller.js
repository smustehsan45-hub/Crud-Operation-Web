const Service = require("../models/service-model");
const service = require("../models/service-model")
const services =async (req,res)=>{
    try {
        const response  = await Service.find()
        res.status(200).json({msg:response})
        if(!response){
            // handle the case where no documnet was found
            res.status(404).json({msg:"No Service Found"})
            return;
        }
    } catch (error) {
        console.log("service error",error);
    }
}

module.exports= services;