import ParkingLotForm from '../../components/parkinglots/ParkingLotForm'
import ParkingLotSelect from '../../components/parkinglots/ParkingLotSelect'
import {useState, useEffect} from 'react'
import apiService from '../../services/api.service'
import {Link} from 'react-router-dom';
import QRCOde from '../../components/QRCode/QRCode'



const ParkingLotPage = (props) => {
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState({})
  const [parkingLotList, setParkingLotList] = useState([])
  const [refresh, setRefresh] = useState(false)

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

  if (loading) {
    return <p>loading ...</p>
  }

    return (

      <div>
          <div style={{marginBottom: "40px", marginTop: "20px"}}>
            <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>
          </div>
          <Link  style={{fontSize: "28px"}} to="/saas/parkinglots/create">Add new parking lot</Link>
        {parkingLotSelect && Object.keys(parkingLotSelect).length === 0 && <ParkingLotForm />}
        {parkingLotSelect && Object.keys(parkingLotSelect).length !== 0 && <ParkingLotForm parkingLotSelect={parkingLotSelect} onSubmitHandler={onSubmitHandler}/>}
        {parkingLotSelect && Object.keys(parkingLotSelect).length !== 0 && <QRCOde url={`http://${process.env.REACT_APP_MOBILE_APP}/client/parkinglot/${parkingLotSelect._id}`} />}

      </div>
    )

}

export default ParkingLotPage;
