import PaymentANDStatusContainer from "./PaymentANDStatusContainer"
import DetailLeftContainer from "./DetailLeftContainer"


const ContainerOneReservation = () => {

  return (
    <div style={{display: "flex", border: "1px solid red"}}>
        <div>
          <DetailLeftContainer/>
        </div>
        <div>
          <PaymentANDStatusContainer/>
        </div>

    </div>


  )
}

export default  ContainerOneReservation