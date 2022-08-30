import './ProfileForm.css'
import apiService from '../../services/api.service'
import {AuthContext} from '../../contexts/authContext'

import { useEffect, useState, useContext } from "react"


const ProfileForm = () => {
  const {loggedInUser} = useContext(AuthContext)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("https://res.cloudinary.com/cloud-do-anand/image/upload/v1661896238/pictures/file_cz6kit.png")
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(true)

   useEffect(() => {
    async function fetchData() {
      try {
        const user = await apiService.getUserProfile()
        setUserName(user.name)
        setUserEmail(user.email)
        if(user.profileImageUrl){
          setImageUrl(user.profileImageUrl)
        }
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [refresh])

  const submitHandler = async (e) => {
    try {
      e.preventDefault()
      const user = {
        name: userName ,
        profileImageUrl: imageUrl
      }
      if(password !== ""){
        user.password = password
      }
       await apiService.updateUserProfile(user)
       setRefresh(!refresh)
    } catch(err) {
      console.log(err)
    }

  }

  const handleFileUpload = async (e) =>{
    const uploadData = new FormData()
    uploadData.append("imageUrl", e.target.files[0])
    try{
        const data = await apiService.uploadFile(uploadData)
        setImageUrl(data.filePath)
    }catch(err){
        console.log(err)
    }
  }

  if (loading) {
    return ( <p> loading ...</p>)
  }
  return (
    <div className="profile-container">
        <div className="profile-header">
          <h1>Hi! {loggedInUser.user.name}</h1>
        </div>
        <form onSubmit={submitHandler} className="profile-form-controls">
          <div className="profile-form-controls-container">
            <div className="profile-form-controls-left-container">
                <input className="profile-form-controls_name badge-pill" type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input className="profile-form-controls_email badge-pill" type="text" defaultValue={userEmail}/>
                <div className="profile-form-controls_password">
                  <label htmlFor="password">Reset password</label>
                  <input name="password" className="badge-pill" type="password" placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="profile-form-controls-right-container">
                <div className="profile-form-controls_image">
                  <img src={imageUrl} alt="profile-pic"/>
                </div>
                <input
                    type="file"
                    name="imageUrl"
                    onChange={handleFileUpload}
                />
                <button
                    disabled={imageUrl === ""}
                    className="profile-form-controls_btn badge-pill">Save</button>
            </div>

          </div>

        </form>
    </div>

  )

 }

 export default ProfileForm
