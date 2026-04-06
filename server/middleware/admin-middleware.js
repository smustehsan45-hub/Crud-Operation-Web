const adminMiddleware = (req,res,next)=>{
    try {
        // console.log(req.user);
        // res.status(200).json({message: req.user.isAdmin})
        const adminRole = req.user.isAdmin;
        if(!adminRole){
            return res.status(403).json({message: "Access Denied. User is not an admin."})
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = adminMiddleware;