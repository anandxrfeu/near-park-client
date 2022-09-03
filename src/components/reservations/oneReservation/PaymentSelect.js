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
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width:"100%", height:"100%", border: "4px solid purple"}}>
      <div style={{paddingTop: "10%", border: "1px solid blue", width:"100%", height:"30%", display:"flex", justifyContent:"center"}}>
        <div style={{height: "100%", display:"flex", alignItems:"center", flexDirection:"column"}}>
          <h3 style={{marginBottom: "-2px"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "red", fontWeight: "600" }}>PENDING</h1>
        </div>
      </div>
      <div style={{ width:"100%", height:"70%", display:"flex", justifyContent:"center", alignItems:"center" ,  flexDirection:"column", paddingBottom:"15%", backgroundColor:"white"}}>
        <div>
          <button value="CASH" className={`CashBtn ${activeCashBtn}`} onClick={changePaymentMethod}>CASH</button>
        </div>
          <button value="CHECKOUT" className={`CheckOutBtn ${activeCheckoutBtn}`} onClick={changePaymentMethod} >CHECKOUT</button>

      </div>

    </div>


  )
}

export default PaymentSelect
