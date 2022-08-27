import './PaymentSelect.css'
import { useState } from 'react'


const PaymentSelect = (props) => {

const [activeCashBtn, setActiveCashBtn] = useState("")
 const [activeCheckoutBtn, setActiveCheckoutBtn] = useState("")



  const {updatePaymentMethod} = props

  const changePaymentMethod = (e) => {
    e.preventDefault()

    if (e.target.value === "CASH") {
      setActiveCashBtn("activeBtn")
      updatePaymentMethod("CASH")
      setActiveCheckoutBtn("")
    }
    else if (e.target.value === "CHECKOUT"){
      setActiveCashBtn("")
      updatePaymentMethod("CHECKOUT")
      setActiveCheckoutBtn("activeBtn")
    }

    }


  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{marginTop: "50px"}}>
        <div>
          <h3 style={{marginBottom: "-2px"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "red", marginLeft: "27px", fontWeight: "600" }}>PENDING</h1>
        </div>
      </div>
      <div style={{marginTop: "30px"}}>
        <div>
          <button value="CASH" className={`CashBtn ${activeCashBtn}`} onClick={changePaymentMethod}>CASH</button>
        </div>
          <button value="CHECKOUT" className={`CheckOutBtn ${activeCheckoutBtn}`} onClick={changePaymentMethod} >CHECKOUT</button>

      </div>

    </div>


  )
}

export default PaymentSelect
