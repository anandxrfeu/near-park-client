const ChangeTotal = (props) => {
  const {change, updateReservation, confirmPaymentByCash}= props

  const clickHandler = () => {
   const payload = {
    endedAt: new Date(),
    status: "CLOSED"
    }
      updateReservation(payload)
      confirmPaymentByCash()
  }



  return (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center", height:"100%", width: "100%"}} >
      <div style={{height:"100%", width:"100%", display: "flex", alignItems:"center", justifyContent:"center"}} >
        <div style={{border: "2px solid black", borderRadius: "22px", width: "340px", display: "flex", justifyContent: "center",
        textAlign: "center", height: "13em", backgroundColor: "white"}}>
          <div style={{height:"100%"}}>
              <div style={{backgroundColor: "black", color: "white", border: "0.1px solid black",
              borderRadius: "8px", height: "38px", width:"280px", marginTop: "22px"}}>
                <h3 style={{paddingTop: "2px"}}>TROCO</h3>
              </div>
              <div style={{marginTop: "36px"}}>
                <h1 style={{fontWeight: "bold", fontSize: "44px"}}>R$ {change}</h1>
              </div>
              <div style={{marginTop: "36px"}}>
                <button className="badge-pill"
                onClick={clickHandler}
                style={{backgroundColor: "black", color: "white", border: "1px solid black", width: "100px", height: "40px"}}>OK</button>
              </div>
           </div>

        </div>

      </div>


    </div>


  )
}

export default  ChangeTotal
