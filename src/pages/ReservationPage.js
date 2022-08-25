/*import Reservation from "../components/Reservation/Reservation";*/
import FilterAndSearch from "../components/Reservation/FilterAndSearch";
import ParkingLotSelect from "../components/ParkingLotSelect";
import {useEffect, useState, useContext} from "react"
import apiService from "../services/api.service";
import ReservationPLOForm from "../components/Reservation/ReservationPLOForm";
import ReservationList from "../components/Reservation/ReservationList";
import {AuthContext} from '../contexts/authContext'


const ReservationPage = (props) => {
  const {isLoading, loggedInUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState({})
  const [parkingLotList, setParkingLotList] = useState([])
  const [reservationList, setReservationList] = useState([])

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

   useEffect(() => {
    async function fetchData() {
      try {
        setLoading(false)
        const reservations = await apiService.getAllReservationsForAParkingLot(parkingLotSelect._id)
        setReservationList(reservations)

      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [parkingLotSelect])

  const createReservationHandler = async (reservation) => {
    console.log(reservation)
    const payload = {
      ...reservation,
    "parkingLot": parkingLotSelect._id.toString(),
    "owner": loggedInUser.user._id.toString()
    }
    console.log(payload)
    try {
        const reservationData = await apiService.createReservation(payload)
        setReservationList((previousState)=> {
          return [reservationData, ...previousState]
        })


    } catch(err){

    }
  }

    return (
      <div>
        <p>ReservationPage..</p>
        <div>
          <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>
        </div>
        <div>
            <div>
              <ReservationPLOForm createReservationHandler={createReservationHandler}/>
            </div>
            <div>
              {reservationList.length === 0 && <p>No Reservations for this Parking Lot</p> }
              {reservationList.length !== 0 && <ReservationList reservationList={reservationList}/> }
            </div>
        </div>
        <div>
          <FilterAndSearch />
        </div>

      </div>



    )
}

export default ReservationPage;
