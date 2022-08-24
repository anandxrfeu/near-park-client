import ParkingLotForm from '../components/ParkingLotForm'
import ParkingLotSelect from '../components/ParkingLotSelect'
import {useState, useEffect} from 'react'
import apiService from '../services/api.service'

const ParkingLotPage = (props) => {
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState('')
  const [parkingLotList, setParkingLotList] = useState([])

    useEffect(() => {
    async function fetchData() {
      try {
        const parkingLots = await apiService.getAllParkingLots()
        setLoading(false)
        console.log("checkParkingLot", parkingLots)
        setParkingLotSelect(parkingLots[0].name)
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

  if (loading) {
    return <p>loading ...</p>
  }

    return (

      <div>
          <p>ParkingLotPage..</p>
          <div style={{marginBottom: "40px"}}>
            <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>
          </div>
          <ParkingLotForm />


      </div>
    )

}

export default ParkingLotPage;
