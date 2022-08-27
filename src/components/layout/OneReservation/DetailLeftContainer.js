import OneReservationDetail from "./OneReservationDetail"
import ChangeCashCalc from "./ChangeCashCalc"

const DetailLeftContainer = (props) => {
  const {reservation} = props

  return (
    <div style={{border: "1px solid green", width: "45vw", height: "80vh"}}>

        <div>
            <div>
             <OneReservationDetail reservation={reservation}/>
            </div>
            <div>
              <ChangeCashCalc/>
            </div>
        </div>

    </div>


  )
}

export default  DetailLeftContainer
