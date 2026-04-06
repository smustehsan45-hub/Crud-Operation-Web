const User = require("../models/user-model")
const Contact = require("../models/contact-model")

const getAllUsers=async(req,res)=>{
    try {
        const users= await User.find({},{password:0})
      console.log(users)
        if(!users || users.length===0){
            return res.status(404).json({message: "No Users Found"})
        }
          res.status(200).json(users)
    } catch (error) {
        next(error)
    }   

}
// single user logic
const getUserById=async(req,res)=>{
    try {  
        const id = req.params.id;
       const data = await User.findOne({_id:id},{password:0})
       
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}
// delete user by id
const deleteUserById=async(req,res)=>{
    try {
        const id = req.params.id;
        const user = await User.deleteOne({_id:id})
        // if(!user.deletedCount){
        //     return res.status(404).json({message: "User Not Found"})
        // }
        res.status(200).json({message: "User Deleted Successfully"})
    } catch (error) {
        next(error)
    }
}

// update user by id

const updateUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const updatedUserData = req.body
        const updatedData = await User.updateOne({_id:id},{$set:updatedUserData})
        res.status(200).json(updatedData)
    } catch (error) {
        next(error)
    }
}

// get all contacts

const getAllContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        console.log(contacts);
          if(!contacts || contacts.length===0){
            return res.status(404).json({message: "No Contacts Found"})
        }
         res.status(200).json(contacts)
    } catch (error) {
        next(error)
    }
}


// delete contact by id
const deleteContactById=async(req,res)=>{
    try {
        const id = req.params.id;
         await Contact.deleteOne({_id:id})
        // if(!contact.deletedCount){
        //     return res.status(404).json({message: "Contact Not Found"})
        // }
        res.status(200).json({message: "Contact Deleted Successfully"})
    } catch (error) {
        next(error)
    }
}


module.exports = {getAllUsers, getAllContacts,deleteUserById,deleteContactById,getUserById,updateUserById};