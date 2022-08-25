import OneReservationForm from "../components/layout/OneReservation/OneReservationForm";
import ContainerOneReservation from "../components/layout/OneReservation/ContainerOneReservation";

const OneReservationPage = (props) => {
    return (

      <div style={{marginLeft: '-20px', marginTop: "-7px"}}>
            <div>
               <OneReservationForm/>
               <div>
                <ContainerOneReservation/>
               </div>

            </div>


      </div>



    )
}

export default OneReservationPage;
