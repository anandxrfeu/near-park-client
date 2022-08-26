import OneReservationDetail from "./OneReservationDetail"
import ChangeCashCalc from "./ChangeCashCalc"

const DetailLeftContainer = (props) => {
  const {reservation, updateReservation} = props

  return (
    <div style={{border: "1px solid green", width: "45vw", height: "80vh"}}>

        <div>
            <div>
             <OneReservationDetail updateReservation={updateReservation} reservation={reservation}/>
            </div>
            {/* <div>
              <ChangeCashCalc/>
            </div> */}
        </div>

    </div>


  )
}

export default  DetailLeftContainer
