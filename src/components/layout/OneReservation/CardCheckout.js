const CardCheckout = () => {

  return (
  <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <div style={{marginTop: "40px"}}>
        <div>
          <h3 style={{marginBottom: "-2px"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "green", marginLeft: "10px",fontWeight: "600" }}>COMPLETE</h1>
        </div>
      </div>
      <div style={{marginTop: "30px"}}>
        <div style={{border: "1px solid black", width: "260px", height: "80px",
        borderRadius: "12px", textAlign: "center",
        paddingTop: "14px"}}>
          <h1 style={{fontWeight: "bold"}}>TICKET#</h1>
        </div>
      </div>
      <div style={{marginTop: "50px"}}>
        <div>
          <h2 style={{fontWeight: '700'}}>CONFIRM CHECK-OUT</h2>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "26px"}}>
          <button style={{color: "white", backgroundColor: "green",
          border: "2px solid green", width: "120px", height: "120px",
          borderRadius: "50%", fontWeight: "700", fontSize: "16px"}}>CONFIRM</button>
        </div>

      </div>
    </div>

  )
}

export default  CardCheckout
