import './ProfileForm.css'
import apiService from '../services/api.service'
import {AuthContext} from '../contexts/authContext'

import { useEffect, useState, useContext } from "react"


const ProfileForm = () => {

  const {isLoading, loggedInUser} = useContext(AuthContext)

  const [userName, setUserName] = useState(loggedInUser.user.name)
  const [userEmail, setUserEmail] = useState(loggedInUser.user.email)
  const [newPassword, setNewPassword] = useState(loggedInUser.user.password)
  const [imageUrl, setImageUrl] = useState(loggedInUser.user.profileImageUrl)
  const [loading, setLoading] = useState(true)

   useEffect(() => {
    async function fetchData() {
      try {
        const user = await apiService.getUserProfile()
        console.log("checkUser", user)
        setUserName(user.data.name)
        setUserEmail(user.data.email)
        setNewPassword(user.data.password)
        setImageUrl(user.data.profileImageUrl)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [])

  const SubmitHandler = async (e) => {
    try {
      e.preventDefault()
      const user = {
        name: userName ,
        password: newPassword,
        profileImageUrl: imageUrl
      }
       const response = await apiService.updateUserProfile(user)
    } catch(err) {
      console.log(err)
    }

  }

    const handleFileUpload = async (e) => {
    const uploadData = new FormData()

    uploadData.append('imageUrl', e.target.files[0])
    const response = await apiService.uploadFile(uploadData)

    setImageUrl(response.filePath)
  }



 if (loading) {
  return ( <p> loading ...</p>)
 }
  return (
    <div>
        <div>
          <h1>PROFILE</h1>
        </div>
        <div className='FormDiv'>
          <form onSubmit={SubmitHandler}>
            <div  className='FormContainer' style={{border: "4px solid blue", display: "flex", flexDirection: "row"}}>
              <div className='FormLeft' style={{border: "5px solid red", display: "flex", flexDirection: "column", marginTop: "30px"}}>
                <div>
                  <input className="ProfileForm badge-pill"
                    placeholder = "USERNAME"
                    type="text"
                    name="UserName"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                  />
                </div>
                <div style={{marginTop: "20px"}}>
                  <input className="ProfileForm Email badge-pill"
                    placeholder = "Email@test.com"
                    type="text"
                    name="Email"
                    defaultValue={userEmail}
                  />
                </div>
                <div style={{marginTop: "200px"}}>
                  <div>
                    <p > RESET PASSWORD</p>
                  </div>
                  <input className="ResetPassword badge-pill"
                    placeholder = "*******"
                    type="password"
                    name="newPassword"
                    onChange={(e) => setNewPassword(e.target.value)}
                    value={newPassword}
                  />
                </div>
              </div>
            <div className='FormRight' style={{border: "4px solid yellow", display: "flex", flexDirection: "column", marginLeft: "50px"}}>
              <div style={{border: "4px solid black", height: "240px", borderRadius:" 12px"}}>
                <div>
                  <img src={imageUrl}/>
                </div>
                <div style={{display: "flex", marginTop: "180px"}}>
                  <input className="ImageURL badge-pill"
                    placeholder="IMAGE URL"
                    type="file"
                    name="imageURL"
                    onChange={handleFileUpload}
                    />
                </div>
              </div>
              <div>
                  <button  disabled={imageUrl === ''} className='badge-pill' style={{backgroundColor: "black", color: "white", width: "250px", border: "black", marginTop: "270px"}}>
                    SAVE
                  </button>
              </div>

            </div>
            </div>
          </form>

        </div>



    </div>

  )

 }

 export default ProfileForm