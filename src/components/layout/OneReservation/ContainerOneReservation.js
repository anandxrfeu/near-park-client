import PaymentANDStatusContainer from "./PaymentANDStatusContainer"
import DetailLeftContainer from "./DetailLeftContainer"


const ContainerOneReservation = (props) => {
  const {reservation} = props

  return (
    <div style={{display: "flex", border: "1px solid red"}}>
        <div>
          <DetailLeftContainer reservation={reservation}/>
        </div>
        <div>
          <PaymentANDStatusContainer/>
        </div>

    </div>


  )
}

export default  ContainerOneReservation
