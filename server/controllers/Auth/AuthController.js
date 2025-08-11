import Usermodel from "../../models/UserModel/UserModel.js";

export const signup =async (req, res)=>{
    try {
        const {name , email , password} = req.body;
        if (!name){
            return res.status(400).json({ message: 'enter your name' });
        }
        if (!email){
            return res.status(400).json({ message: 'enter your email' });
        }
        if (!password){
            return res.status(400).json({ message: 'enter your password' });
        }

        const ExistsUser = await Usermodel.findOne({ email })
        if (ExistsUser) {
            return res.status(400).json({ success: false, message: "User Already Exists Please Login" })
        }

        const user =new Usermodel( {
            name , 
            email , 
            password
        })

        await user.save();

        return res.status(200).json({ success: true, message: "User Register Successfully", user })

    } catch (error) {
        console.log(error)
        return res.status(400).json({ success: false, message: "internal server error" })
    }
}

export const signin = async (req, res)=>{
    try {
        const {email , password} = req.body;

     // Check if email and password are provided
     if (!email) {
        return res.status(400).json({ message: "Please enter your email" });
      }
      if (!password) {
        return res.status(400).json({ message: "Please enter your password" });
      }

      const user = await Usermodel.findOne({email})
      if(!user){
        return res.status(400).json({ success: false, message: "User not found. Please sign up." });
      }

      if(user.password !== password){
        return res.status(400).json({success : false, message : "Invalid password "})
      }

      return res.status(200).json({success : true, message : "Sign in successfully"})
    } catch (error) {
        return res.status(500).json({success : false , message : "internal error"})
    }
}