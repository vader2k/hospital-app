import User from '../Models/UserSchema.js'

export const updateUser = async(req, res) =>{
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        );

        res
        .status(200)
        .json({
            success: true, 
            message: "Successfully updated",
             data: updatedUser
        })
    } catch (error) {
        res.status(500).json({success: false, message: "failed to update"})
    }
}

export const deleteUser = async(req, res) =>{
    const id = req.params.id

    try {
         await User.findByIdAndDelete(
            id
        );

        res
        .status(200)
        .json({
            success: true, 
            message: "Successfully deleted"
        })
    } catch (error) {
        res.status(500).json({success: false, message: "failed to delete"})
    }
}

export const getSingleUser = async(req, res) =>{
    const id = req.params.id

    try {
        const user = await User.findById(
            id
        ).select("-password");

        res
        .status(200)
        .json({
            success: true, 
            message: "User Successfully found",
            data: user
        })
    } catch (error) {
        res.status(404).json({success: false, message: "No user found"})
    }
}


export const getAllUser = async(req, res) =>{

    try {
        const users = await User.find({}
        ).select("-password");

        res
        .status(200)
        .json({
            success: true, 
            message: "Users found",
            data: users
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Not found"})
    }
}