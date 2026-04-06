const { sign } = require("jsonwebtoken");
const {z } = require("zod");

const loginSchema = z.object({
  email: z.string({required_error:"email is required"}).trim().email({message:"invalid email address"}).min(3,{message:"email must be at least 3 characters"}).max(255, {message:"email must be less than 255 characters"})   ,
     password: z.string({required_error:"password is required"}).min(6,{message:"password must be at least 6 characters"}).max(1024, {message:"password must be less than 1024 characters" })

})

// create validate middleware after this file 
const signupSchema = loginSchema.extend({
    username: z.string({required_error:"username is required"}).trim().min(3,{message:"name must be at least 3 characters"}).max(255, {message:"name must be less than 255 characters"}),
  
    phone: z.string({required_error:"phone is required"}).trim().min(10,{message:"phone must be at least 10 characters"}).max(15,{message:"phone must be less than 15 characters"}),
 
})

module.exports = {signupSchema, loginSchema}