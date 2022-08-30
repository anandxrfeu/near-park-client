import './ProfileForm.css'
import apiService from '../../services/api.service'
import {AuthContext} from '../../contexts/authContext'

import { useEffect, useState, useContext } from "react"


const ProfileForm = () => {
  const {loggedInUser} = useContext(AuthContext)
  const [userName, setUserName] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [loading, setLoading] = useState(true)
  const [refresh, setRefresh] = useState(true)

   useEffect(() => {
    async function fetchData() {
      try {
        const user = await apiService.getUserProfile()
        setUserName(user.data.name)
        setUserEmail(user.data.email)
        if(user.data.profileImageUrl){
          setImageUrl(user.data.profileImageUrl)
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
    <div>
        <div>
          <h1>Hi! {loggedInUser.user.name}</h1>
        </div>
        <form onSubmit={submitHandler}>
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                <input type="text" defaultValue={userEmail}/>
                <input type="password" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input 
                    type="file"
                    name="imageUrl"
                    onChange={handleFileUpload}
                />
                <div className="profile-pic">
                  <img src={imageUrl} alt="profile-pic"/>
                </div>
                <button
                    disabled={imageUrl === ""} 
                    className="btn btn-primary">Save</button>
            </form>


    </div>

  )

 }

 export default ProfileForm
