import jwt from 'jsonwebtoken'

const authMiddle = async (req,res,next) =>{
    const {token} = req.headers;
    if(!token)
    {
        return res.json({success:false,message:"Not Authorised login again"});
    }
    try {
        const toekn_decode = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = toekn_decode.id;
        next();
    } catch (error) {
        console.log(error);
        return res.json({success:false,message:"Internal Server Error"});
    }
}
export default authMiddle;