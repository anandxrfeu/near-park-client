import ParkingLotForm from '../components/ParkingLotForm'
import ParkingLotSelect from '../components/ParkingLotSelect'
import {useState, useEffect} from 'react'
import apiService from '../services/api.service'
import {Link} from 'react-router-dom';


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
          <Link to="/saas/parkinglots/create">Add new parling lot</Link>
        {Object.keys(parkingLotSelect).length === 0 && <ParkingLotForm />}
        {Object.keys(parkingLotSelect).length !== 0 && <ParkingLotForm parkingLotSelect={parkingLotSelect} onSubmitHandler={onSubmitHandler}/>}
      </div>
    )

}

export default ParkingLotPage;
