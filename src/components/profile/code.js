/**

const CreateRoom = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const navigate = useNavigate()

    const handleFileUpload = async (e) =>{
        const uploadData = new FormData()
        uploadData.append("imageUrl", e.target.files[0])     
        try{
            const data = await apiService.uploadFile(uploadData)
            console.log(data)
            console.log(data.filePath)
            setImageUrl(data.filePath)
        }catch(err){
            console.log(err)
        }
    }

   const handleSubmit = async (e) => {
        e.preventDefault()
        const room = {name, description, imageUrl}
        console.log(room)
        try{
            await apiService.createRoom(room)
            setName("")
            setDescription("")
            setImageUrl("")
            navigate("/")
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div className="m-2">
            <h1>New Room</h1>
            <form onSubmit={handleSubmit}>
                <TextInput 
                    label="Name"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={ e => setName(e.target.value) }
                />

                <TextInput 
                    label="Description"
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={ e => setDescription(e.target.value) }
                />

                <input 
                    type="file"
                    name="imageUrl"
                    onChange={handleFileUpload}
                />

                <button
                    disabled={imageUrl === ""} 
                    className="btn btn-primary">Save</button>

            </form>
        </div>
    )
}

export default CreateRoom

**/