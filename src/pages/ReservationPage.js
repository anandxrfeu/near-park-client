import Reservation from "../components/Reservation/Reservation";
import FilterAndSearch from "../components/Reservation/FilterAndSearch";
import ParkingLotSelect from "../components/ParkingLotSelect";


const ReservationPage = (props) => {
    return (
      <div>
        <p>ReservationPage..</p>
        <div>
          <ParkingLotSelect/>
        </div>
        <div>
         <Reservation/>
        </div>
        <div>
          <FilterAndSearch />
        </div>

      </div>



    )
}

export default ReservationPage;
