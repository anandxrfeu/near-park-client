import { useState } from "react"



const OneReservationDetail = () => {

  const [updateGuestUserPhone, setUpdateGuestUserPhone] = useState('')

  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
      <div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "12px"}}>
          <h5 style={{fontSize:"16px", fontWeight: "lighter" }}>CELLPHONE NUMBER</h5>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "116px"}}>
          <form >
            <input className="guestUserPhoneUpdate badge-pill"
              placeholder = "11999998888"
              type="text"
              name="GuestUserPhone"
              onChange={(e) => setUpdateGuestUserPhone(e.target.value)}
              value={updateGuestUserPhone}
            />
            <button className="badge-pill" style={{marginLeft: "30px", width: "80px",
            height:"40px", backgroundColor: "black", color: "white", border: "black"}}>EDIT</button>
          </form>

        </div>

      </div>
      <div style={{marginTop: "54px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div style={{color: "#FED000", backgroundColor: "black", width: "200px",
        paddingTop:"6px", paddingBottom:"2px", textAlign: "center", border: "1px solid black", borderRadius: "10px"}}>
          <h1>ACTIVE</h1>
        </div>
        {/* <div style={{color: "green", backgroundColor: "black", width: "200px",
        paddingTop:"6px", paddingBottom:"2px", textAlign: "center", border: "1px solid black", borderRadius: "10px"}}>
          <h1>CLOSED</h1>
        </div> */}
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "35px"}}>
          <div style={{display: "flex", justifyContent: 'space-between', border: "1px solid black",
          width: "310px", height:"100px", paddingLeft: "32px",  paddingRight: "32px",
          paddingTop: "14px", borderRadius: "10px", marginTop: "26px",
          marginLeft: "-45px"}}>
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

    </div>


  )
}

export default  OneReservationDetail
