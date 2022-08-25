import OneReservationDetail from "./OneReservationDetail"
import ChangeCashCalc from "./ChangeCashCalc"

const DetailLeftContainer = () => {

  return (
    <div style={{border: "1px solid green", width: "45vw", height: "80vh"}}>

        <div>
            <div>
             <OneReservationDetail/>
            </div>
            <div>
              <ChangeCashCalc/>
            </div>
        </div>

    </div>


  )
}

export default  DetailLeftContainer
