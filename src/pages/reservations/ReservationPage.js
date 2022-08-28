
import ParkingLotSelect from "../../components/parkinglots/ParkingLotSelect";
import {useEffect, useState, useContext} from "react"
import apiService from "../../services/api.service";
import ReservationPLOForm from "../../components/reservations/ReservationForm";
import ReservationList from "../../components/reservations/ReservationList";
import FilterList from "../../components/reservations/filter/Filter"
import Occupancy from "../../components/reservations/occupancy/Occupancy";
import SearchReservation from "../../components/reservations/search/Search";
import {AuthContext} from '../../contexts/authContext'



const ReservationPage = (props) => {
  const {loggedInUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(true)
  const [parkingLotSelect, setParkingLotSelect] = useState({})
  const [parkingLotList, setParkingLotList] = useState([])
  const [reservationList, setReservationList] = useState([])
  const [reservationListFiltered, setReservationListFiltered] = useState([])
  const [refresh, setRefresh] = useState(false)



  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(false)
        const parkingLots = await apiService.getAllParkingLots()
        setParkingLotSelect(parkingLots[0])                          //To do
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

   useEffect(() => {
    async function fetchData() {
      try {
        setLoading(false)
        const reservations = await apiService.getAllReservationsForAParkingLot(parkingLotSelect._id)
        setReservationList(reservations)
        setReservationListFiltered(reservations)

      } catch (err) {
        console.log(err)
      }
    }

    if(parkingLotSelect !== undefined){
      fetchData()
    }
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
        // setReservationList((previousState)=> {
        //   return [reservationData, ...previousState]
        // })
        setRefresh(!refresh)


    } catch(err){

    }
  }

  const searchReservation = (searchText) => {
    let  filteredReservationList  = []
    if(searchText && isLetter(searchText[0])){
      filteredReservationList = reservationList.filter(resrvtn => {
        return resrvtn.vehicle.licensePlate.toLowerCase().startsWith(searchText.toLowerCase())
      })
    }else{
      filteredReservationList = reservationList.filter(resrvtn => {
        return resrvtn.guestUserPhone.startsWith(searchText)
      })
    }
    setReservationListFiltered(filteredReservationList)

  }

  function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
  }

  const filterReservations = (filter) => {
    console.log(filter)
    let  filteredReservationList  = []
    if(filter === "CASH") {
      filteredReservationList = reservationList.filter(r => {
        return r.payBy === "CASH" && r.status !== "CLOSED"
      })
    }
      else if (filter === "CARD") {
        filteredReservationList = reservationList.filter(r => {
          return r.payBy === "CARD" && r.status !== "CLOSED"
      })
    }

    else if (filter === "CLOSED") {
      filteredReservationList = reservationList.filter(r => {
      return r.status === "CLOSED"
      })}

    else if (filter === "ALL") {
       filteredReservationList = reservationList
    }

    console.log("resList", filteredReservationList)
     setReservationListFiltered(filteredReservationList)
  }

    return (
      <div style={{marginLeft: "-20px"}}>
        <div style={{marginTop: "12px", marginBottom: "20px"}}>
          <ParkingLotSelect parkingLotList={parkingLotList} onSelectHandler={onSelectHandler}/>
        </div>
        <div>
            <div>
              <ReservationPLOForm createReservationHandler={createReservationHandler}/>
            </div>
            <div>
              <div>
                {reservationList.length === 0 &&
                <div style={{border: "1px solid black", display: "flex", justifyContent:"center", alignContent:"center" }}>
                    <div>
                      <p style={{fontSize: "38px", fontWeight: "500", marginTop: '140px', marginBottom: "140px"}}>No Reservations for this Parking Lot</p>
                    </div>

                </div> }
              </div>
              <div>
                {reservationList.length !== 0 && <ReservationList reservationList={reservationListFiltered}/> }
              </div>
            </div>
        </div>
        <div>
          {/* <FilterAndSearch searchReservation={searchReservation} /> */}
        <div style={{marginTop: "30px", border: "1px solid red"}} >
            <div>
              <FilterList filterReservations={filterReservations}/>
            </div>

            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
              <div>
                <Occupancy maxOccupancy={parkingLotSelect.maxOccupancy} activeReservations={reservationList.filter((r) => r.status !== "CLOSED").length}/>
              </div>

              <div>
                <div className="Search" style={{marginTop: "30px", border: "1px solid red"}}>
                  <div>
                    <SearchReservation searchReservation={searchReservation} />
                  </div>

                </div>
              </div>
            </div>
    </div>
        </div>

      </div>



    )
}

export default ReservationPage;