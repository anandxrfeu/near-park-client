import ReservationList from "./ReservationList"
import ReservationPLOForm from "./ReservationPLOForm"


const Reservation = (props) => {
    return (
      <div>
         <p>Reservation..</p>
         <div>
            <div>
              <ReservationPLOForm />
            </div>
            <div>
              <ReservationList/>
            </div>

         </div>
      </div>



    )
}

export default Reservation
