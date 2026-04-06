const { Schema } = require("zod")

const validate =(schema)=>async (req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const status = 422 
          const message = "Fill the input properly"
          const extraDetails = err?.issues?.[0]?.message || "Validation failed"
          const error = {
            status,
            message,
            extraDetails
          }
    console.log("validation error:", error)
    // res.status(400).json({ msg: message })
    // after create error middleware we can send the error to error middleware
    next(error)
    }

}

module.exports = validate