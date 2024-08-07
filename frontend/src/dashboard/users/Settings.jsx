import { useState, useEffect } from "react"
import { BASE_URL, token } from "../../config"
import uploadImageToCloudinary from "../../utils/uploadCloudinary"
import HashLoader from "react-spinners/HashLoader"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

const Settings = ({ user }) => {
  const navigate = useNavigate()
  const [selectedFile, setSelectedFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    name : '',
    email : '',
    password : '',
    gender : '',
    photo : null,
    bloodType: '',
  })

  useEffect(()=> {
    setFormData({
      name : user.name,
      email : user.email,
      gender : user.gender,
      bloodType: user.bloodType,
      photo : user.photo,
    })
  },[user])

  const handleInputChange = e =>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleFileInputChange = async(e) =>{
    const file = e.target.files[0];
    const data = await uploadImageToCloudinary(file)
    setSelectedFile(data.url)
    setFormData({...formData, photo: data.url})
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    setLoading(true)

    try {
      setLoading(true)
      const res = await fetch(`${BASE_URL}/users/${user._id}`, {
        method: 'Put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      const {message} = await res.json()
      if(!res.ok){
        throw new Error(message)
      }

      setLoading(false)
      toast.success(message) 
      navigate("/users/profile/me")
    } catch (error) {
      toast.error(error.message)
      setLoading(false)
    }
  }


  return (
    <div className="mt-10">
      <form onSubmit={submitHandler}>
        <div className="mb-5">
          <input 
            type="text"
            placeholder="Enter Your Name"
            name="name" 
            value={formData.name}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
          />
        </div>

        <div className="mb-5">
          <input 
            type="email"
            placeholder="Enter Your Email"
            name="email" 
            value={formData.email}
            onChange={handleInputChange}
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
            aria-readonly
            readOnly
          />
          </div>
          <div className="mb-5">
            <input 
              type="password"
              placeholder="Password"
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
            />
          </div>

          <div className="mb-5">
            <input 
              type="text"
              placeholder="Blood Type"
              name="bloodType" 
              value={formData.bloodType}
              onChange={handleInputChange}
              className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primary text-[16px] leading-7 text-headingBg placeholder:text-textcol cursor-pointer"
              required
            />
          </div>

          <div className='flex items-center justify-between mb-5'>
            <label 
              className='text-headingBg font-bold text-[16px] leading-7'>Gender :
                <select 
                  name='gender' 
                  value={formData.gender}
                  onChange={handleInputChange}
                  className='text-textcol font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none'>
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="disturbed">Other</option>
                </select>
              </label>
          </div>

          <div className='flex items-center gap-3 mb-5'>
            {formData.photo && <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primary flex items-center justify-center overflow-hidden'>
              <img className='w-full rounded-full' src={formData.photo}/>
            </figure>}

            <div className='relative w-[130px] h-[50px]'>
              <input
                type='file' 
                name='photo' 
                id='customFile' 
                accept='.jpg, .png'
                onChange={handleFileInputChange}
                className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'/>

              <label 
                htmlFor='customFile' 
                className='absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingBg font-semibold rounded-lg truncate cursor-pointer'>
                  {selectedFile ? selectedFile.name : 'Upload photo'}
              </label>
            </div>
            </div>

            <div className="mt-7">
                <button 
                  type="submit"
                  disabled={loading} 
                  className="w-full bg-primary text-white text-[18px] leading-[30px] rounded-lg py-3 px-4"
                  onClick={handleInputChange}>
                    { loading ? (
                      <HashLoader size={35} color='#ffffff'/>
                      ) : (
                        "Update"
                      )}
                </button>
            </div>
          </form>
    </div>
  )
}

Settings.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    gender: PropTypes.string,
    bloodType: PropTypes.string,
    photo: PropTypes.string
  }).isRequired
}


export default Settings