const OneReservationDetail = () => {

  return (
    <div style={{display: "flex", flexDirection: "column", marginLeft: "35%"}}>
      <div>
        <h5>CELLPHONE NUMBER</h5>
        <input className="badge-pill"/>
      </div>
      <div style={{marginTop: "40px"}}>
        <div style={{color: "#FED000", backgroundColor: "black", width: "200px",
        paddingTop:"6px", paddingBottom:"2px", textAlign: "center", border: "1px solid black", borderRadius: "10px"}}>
          <h1>ACTIVE</h1>
        </div>
        <div style={{display: "flex", justifyContent: 'space-between', border: "1px solid black",
         width: "310px", height:"100px", paddingLeft: "32px",  paddingRight: "32px",
        paddingTop: "14px", borderRadius: "10px", marginTop: "40px",
        marginLeft: "-55px"}}>
          <div>
            <h5>DURATION</h5>
            <h2 style={{fontWeight: "bold"}}>02 H</h2>
          </div>
          <div>
            <h5>TOTAL</h5>
            <h2 style={{fontWeight: "bold"}}>15,00</h2>
          </div>
        </div>
      </div>

    </div>


  )
}

export default  OneReservationDetail
