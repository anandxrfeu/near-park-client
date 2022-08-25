import ParkingLotForm from '../components/ParkingLotForm'
import apiService from '../services/api.service'
import { useNavigate } from 'react-router-dom'

const ParkingLotCreatePage = (props) => {

  const navigate = useNavigate();

  const onSubmitHandler = async (parkingLot) => {
    console.log("onSubmitHandler.. in ParkingLotCreatePage ..",parkingLot )
    try{
      await apiService.createParkingLot(parkingLot)
      navigate("/saas/parkinglots");
    }catch(err){
      console.log(err)
    }
  }
    return (

      <div>
          <p>ParkingLotcreate Page..</p>    
          <ParkingLotForm onSubmitHandler={onSubmitHandler}/>
      </div>
    )

}

export default ParkingLotCreatePage;
