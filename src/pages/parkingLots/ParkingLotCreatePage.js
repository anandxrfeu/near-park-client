import "./ParkingLotCreatePage.css"


import apiService from '../../services/api.service'
import { useNavigate } from 'react-router-dom'
import ParkingLotCreateForm from "../../components/parkinglots/ParkingLotCreateForm"

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

      <div className="parkinglot-create-container">
          <h1>Create A new Parking Lot</h1>    
          <ParkingLotCreateForm onSubmitHandler={onSubmitHandler}/>
      </div>
    )

}

export default ParkingLotCreatePage;
