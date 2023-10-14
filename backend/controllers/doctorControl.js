import Doctor from '../Models/DoctorSchema.js'

export const updateDoctor = async(req, res) =>{
    const id = req.params.id

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(
            id,
            {$set: req.body},
            {new: true}
        );

        res
        .status(200)
        .json({
            success: true, 
            message: "Successfully updated",
             data: updatedDoctor
        })
    } catch (error) {
        res.status(500).json({success: false, message: "failed to update"})
    }
}

export const deleteDoctor = async(req, res) =>{
    const id = req.params.id

    try {
         await Doctor.findByIdAndDelete(
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

export const getSingleDoctor = async(req, res) =>{
    const id = req.params.id

    try {
        const doctor = await Doctor.findById(
            id
        ).select("-password");

        res
        .status(200)
        .json({
            success: true, 
            message: "doctor Successfully found",
            data: doctor
        })
    } catch (error) {
        res.status(404).json({success: false, message: "No doctor found"})
    }
}


export const getAllDoctor = async(req, res) =>{

    try {

        const {query} = req.query
        let doctors;

        if(query){
                doctors = await Doctor.find({isApproved: 'approved', $or: [
                {name :{$regex:query, $options: 'i'}},
                {specialization :{$regex:query, $options: 'i'}}
            ] 
        })
        } else {
        doctors = await Doctor.find({isApproved: 'approved'}).select("-password")
        }

        res
        .status(200)
        .json({
            success: true, 
            message: "Users found",
            data: doctors
        })
    } catch (error) {
        res.status(500).json({success: false, message: "Not found"})
    }
}