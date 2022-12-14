import "./ParkingLotPage.css"

import ParkingLotForm from '../../components/parkinglots/ParkingLotForm'
import ParkingLotSelect from '../../components/parkinglots/ParkingLotSelect'
import {useState, useEffect} from 'react'
import apiService from '../../services/api.service'
import {Link} from 'react-router-dom';
import PlusButton from "../../components/layout/plusButton/PlusButton"



const ParkingLotPage = (props) => {
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState({})
  const [parkingLotList, setParkingLotList] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(false)
        const parkingLots = await apiService.getAllParkingLots()
        setParkingLotSelect(parkingLots[0])
        setParkingLotList(parkingLots)

      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [refresh])

  const onSelectHandler = (parkingLot) =>{
    setParkingLotSelect(parkingLot)
  }

  const onSubmitHandler = async (parkingLot) => {
    console.log("Onsubmit handler", parkingLot)
    try{
      await apiService.updateParkingLot(parkingLotSelect._id,parkingLot)
      setRefresh(!refresh)
    }catch(err){
      console.log(err)
    }
  }

  const onDeleteHandler = async (e) => {
    e.preventDefault()
    console.log("parkingLotSelect -> ", parkingLotSelect)
    try{
      const data = await apiService.deleteParkingLot(parkingLotSelect._id)
      console.log("data -> ", data)
      setRefresh(!refresh)
    }catch(err){
      console.log(err)
      console.log("msg -> ", err.response.data.msg)
      setError(err.response.data.msg)
    }
  }

  if (loading) {
    return <p>loading ...</p>
  }

    return (

      <div className="pakinglot-container">
        <div className="pakinglot-container-top">
            <div style={{marginBottom: "40px", marginTop: "20px"}}>
              {console.log(parkingLotList)}
              {parkingLotList && parkingLotList.length !== 0 && <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>}
            </div>
            <div className="create-parkinglot-btn">
              <span className="create-parkinglot-span">Add new parking lot</span>
              <Link to="/saas/parkinglots/create">
                  <PlusButton />
              </Link>
          </div>

        </div>
        {parkingLotSelect && Object.keys(parkingLotSelect).length === 0 && <ParkingLotForm />}
        {parkingLotSelect && Object.keys(parkingLotSelect).length !== 0 && <ParkingLotForm parkingLotSelect={parkingLotSelect} onSubmitHandler={onSubmitHandler} onDeleteHandler={onDeleteHandler}/>}
        {/* {parkingLotSelect && Object.keys(parkingLotSelect).length !== 0 && <QRCOde url={`http://${process.env.REACT_APP_MOBILE_APP}/client/parkinglot/${parkingLotSelect._id}`} />} */}
        {error === "Active reservation exists"  && <div className="parkinglot-error">This parkinglot has active reservations, and cannot be deleted right now!</div>}
      </div>
    )

}

export default ParkingLotPage;
