import User from '../Models/UserSchema.js'
import Doctor from '../Models/DoctorSchema.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (req, res) =>{

    const {email, password, name, role, photo, gender} = req.body

    try{
        let user = null;
        //used to communicate between the user and doctor schema roles .
        if (role == 'patient'){
            user = await User.findOne({email})
        } else if (role == 'doctor'){
            user = await Doctor.findOne({email})
        }
        //check if email is already in use
        if (user) {
            return res.status(400).json("user already exists")
        }
        //hash password for security
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        
        if (role == 'patient'){
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        if (role == 'doctor'){
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            })
        }

        await user.save()
        res.status(200).json("successfully created user")

    }catch(err){
        console.error(err); // Log the error to the console for debugging.
        res.status(500).json("Internal Server Error: " + err.message);
    }
}




export const login = async(req, res) =>{
    const {email, password} = req.body
    try{
        let user = null

        const patient = await User.findOne({email})
        const doctor = await Doctor.findOne({email})

         if (patient){
            user = patient
         } else {
            user = doctor
         }
         //chec if user exists
         if (!user){
            return res.status(404).json("user not found")
         }
         //compare the password

    }catch(err){
        
    }
}