import { useEffect, useState } from "react"



const OneReservationDetail = (props) => {
  const {reservation, updateReservation} = props

  const [updateGuestUserPhone, setUpdateGuestUserPhone] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [duration, setDuration] = useState('')
  const [price, setPrice] = useState("")

  useEffect(() => {
    if (reservation) {
      setUpdateGuestUserPhone(reservation.guestUserPhone)
      const reservationDuration = calculateDurationInHours(reservation.createdAt, new Date())
      setDuration(reservationDuration)
      if (reservation.parkingLot) {
        setPrice(calculatePrice(reservation.parkingLot.pricing, reservationDuration))
      }
      setIsLoading(false)
    }


  }, [reservation])

  const editHandler = (e) => {
    e.preventDefault()
    const updatedReservation = {
      guestUserPhone: updateGuestUserPhone
    }
    updateReservation(updatedReservation)
  }

  const calculateDurationInHours = (start, end) => {
    const startDate = new Date(start)
    const endDate = new Date(end)

    const durationInHours = Math.ceil((endDate.valueOf() - startDate.valueOf())/3600000)
    return durationInHours
  }

  const calculatePrice = (pricing, durationInHours) => {
    let price = 0
    if(durationInHours >= 24){
        price = parseInt(pricing.twentyFourHourPrice) + (durationInHours - 24)*parseInt(pricing.oneHourAdditionalPrice)
    } else if (durationInHours >= 8 ){
        price = parseInt(pricing.eightHourPrice) + (durationInHours - 8)*parseInt(pricing.oneHourAdditionalPrice)
    }else{
        price = parseInt(pricing.oneHourPrice) + (durationInHours - 1)*parseInt(pricing.oneHourAdditionalPrice)
    }
    return price
}


  if (isLoading) {
    return (
      <p>loading...</p>
    )

  }
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
      <div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "12px"}}>
          <h5 style={{fontSize:"16px", fontWeight: "lighter" }}>CELLPHONE NUMBER</h5>
        </div>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginLeft: "116px"}}>
          <form onSubmit={editHandler}>
            <input className="guestUserPhoneUpdate badge-pill"
              placeholder = "CellPhone Number"
              type="number"
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
          <h1>{reservation.status !== "CLOSED" ? "ACTIVE" : "CLOSED"}</h1>
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
              <h2 style={{fontWeight: "bold"}}>{duration} H</h2>
            </div>
            <div>
              <h5>TOTAL</h5>
              <h2 style={{fontWeight: "bold"}}>R$ {price}</h2>
            </div>
          </div>
        </div>

      </div>

    </div>


  )
}

export default  OneReservationDetail
