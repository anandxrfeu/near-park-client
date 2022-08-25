import './PaymentSelect.css'

const PaymentSelect = () => {

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
          <button className="CashBtn">CASH</button>
        </div>
          <button className="CheckOutBtn" >CHECKOUT</button>

      </div>

    </div>


  )
}

export default PaymentSelect
