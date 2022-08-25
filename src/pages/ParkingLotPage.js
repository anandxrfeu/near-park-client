import ParkingLotForm from '../components/ParkingLotForm'
import ParkingLotSelect from '../components/ParkingLotSelect'
import {useState, useEffect} from 'react'
import apiService from '../services/api.service'

const ParkingLotPage = (props) => {
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState({})
  const [parkingLotList, setParkingLotList] = useState([])

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
  }, [])

  const onSelectHandler = (parkingLot) =>{
    setParkingLotSelect(parkingLot)
  }

  const onSubmitHandler = (parkingLot) => {
    console.log("Onsubmit handler", parkingLot)

  }

  if (loading) {
    return <p>loading ...</p>
  }

    return (

      <div>
          <div style={{marginBottom: "40px", marginTop: "20px"}}>
            <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>
          </div>
        {Object.keys(parkingLotSelect).length === 0 && <ParkingLotForm />}
        {Object.keys(parkingLotSelect).length !== 0 && <ParkingLotForm parkingLotSelect={parkingLotSelect} onSubmitHandler={onSubmitHandler}/>}
      </div>
    )

}

export default ParkingLotPage;
