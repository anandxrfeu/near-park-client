import PaymentSelect from "./PaymentSelect"
import CardCheckout from "./CardCheckout"
import PaymentComplete from './PaymentComplete'

const PaymentANDStatusContainer = () => {

  return (
    <div style={{border: "1px solid blue", width: "45vw", height: "80vh"}}>
        <p>Right Container</p>
        <PaymentSelect/>
        <CardCheckout/>
        <PaymentComplete/>
    </div>


  )
}

export default  PaymentANDStatusContainer
