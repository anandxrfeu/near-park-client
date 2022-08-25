import PaymentSelect from "./PaymentSelect"
import CardCheckout from "./CardCheckout"
import PaymentComplete from './PaymentComplete'
import ChangeTotal from "./ChangeTotal"

const PaymentANDStatusContainer = () => {

  return (
    <div style={{border: "1px solid blue", width: "45vw", height: "80vh"}}>
        <div style={{display: "flex", justifyContent: "right", backgroundColor: "black", color: "white"}}>
          <h2 style={{paddingRight: "20px", display: "flex"}}>PAYMENT</h2>
        </div>
        <div>
          <div>
            <PaymentSelect/>
          </div>
          {/* <div>
            <CardCheckout/>
          </div> */}
          {/* <div>
            <PaymentComplete/>
          </div> */}
          {/* <div>
            <ChangeTotal/>
          </div> */}

        </div>

    </div>


  )
}

export default  PaymentANDStatusContainer
