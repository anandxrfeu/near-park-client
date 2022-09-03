import './CardCheckout.css'

const CardCheckout = (props) => {

  const {reservation, confirmPaymentByCard} = props

  console.log("in CardCheckout..")

  return (
  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height:"100%", width:"100%"}}>
    <div style={{width:"100%", height:"30%"}}>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column", height:"100%", width:"100%", paddingTop:"6%"}}>
          <h3 style={{marginBottom: "-2px", fontSize: "1.2em"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "green", fontWeight: "600", fontSize: "1.94em", marginLeft: "-2px" }}>{reservation.status === "PAID" ? "COMPLETE" : "PENDING"}</h1>
        </div>
    </div>
    <div style={{width:"100%", height:"70%",  display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
      <div style={{paddingTop: "0%", width:"100%", height:"30%", display:"flex", justifyContent: "center", alignItems: "center"}}>
        <div style={{border: "1px solid black", width: "260px", height: "80px",
            borderRadius: "12px", textAlign: "center",
            paddingTop: "14px"}}>
          <h1 style={{fontWeight: "bold"}}>{reservation.ticket}</h1>
        </div>
      </div>
      <div style={{ width:"100%", height:"70%",  display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
        <div style={{height:"100%", width:"100%",  display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column"}}>
          <div style={{height:"30%", width:"100%", display:"flex", justifyContent: "center", alignItems: "center"}}>
              <h2 style={{fontWeight: '700', paddingTop:"4%"}}>CONFIRM CHECK-OUT</h2>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center",  height:"70%", width:"100%"}}>
              <button className="confirmBtn" disabled={reservation.status !== 'PAID'}
               onClick={confirmPaymentByCard}>CONFIRM</button>
            </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default  CardCheckout
