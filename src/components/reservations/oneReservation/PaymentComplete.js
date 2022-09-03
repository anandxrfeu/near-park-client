import CheckOutIcon from '../../../assets/icons/check_complete_done_green_success_icon (2).png'

const PaymentComplete = (props) => {
  const {reservation} = props

  const reservationStartTimeStamp = new Date(reservation.createdAt)
  const reservationStartDate = `${reservationStartTimeStamp.getDate()}/${reservationStartTimeStamp.getMonth() + 1}/${reservationStartTimeStamp.getFullYear()}`

   const reservationEndTimeStamp = new Date(reservation.endedAt)
   const reservationEndDate = `${reservationEndTimeStamp.getDate()}/${reservationEndTimeStamp.getMonth() + 1}/${reservationEndTimeStamp.getFullYear()}`
  console.log("paymentcomplete reservation", reservation)

  return (
<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white" , height:"100%", width:"100%"}}>
      <div style={{ height:"30%", paddingTop:"40px", width:"100%"}}>
        <div style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column", height:"100%", width:"100%"}}>
          <h3 style={{marginBottom: "-2px", fontSize: "1.2em"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "green", fontWeight: "600", fontSize: "1.94em", marginLeft: "-2px" }}>COMPLETE</h1>
        </div>
      </div>

      <div style={{height:"70%", width: "100%",  backgroundColor:"white"}}>
        <div style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height:"100%", width:"100%", backgroundColor:"white"}} >
          <div style={{backgroundColor:"white"}}>
            <h2 style={{fontWeight: '400', fontSize: "32px", paddingBottom:"12px"}}>CHECK-OUT CONFIRMED!</h2>
          </div>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "6px"}}>
            <img style={{width: "150px", height: "150px"}} src={CheckOutIcon} alt="checkouticon"/>
          </div>
          <div style={{paddingTop: "22px",  display: "flex", justifyContent: "center",
              alignContent: "center"}}>
            <div style={{border: "1px solid black", width: "314px", height: "114px",
                borderRadius: "16px", textAlign: "center", paddingTop: "14px",
                display: "flex", flexDirection: "row", justifyContent:"space-around", alignContent: "center"}}>
                <div>
                  <h3 style={{fontSize: "16px", fontWeight: "300"}}>CHECK-IN</h3>
                  <h2 style={{fontSize: "40px", fontWeight: "bold", marginTop: "-2px"}}>{reservation.startTime}</h2>
                  <h6 style={{fontSize: "12px", fontWeight: "400", color: "grey",  marginTop: "-4px"}}>{reservationStartDate}</h6>
                </div>
                <div>
                  <h3 style={{fontSize: "16px", fontWeight: "300"}}>CHECK-OUT</h3>
                  <h2 style={{fontSize: "40px", fontWeight: "bold",  marginTop: "-2px"}}>{reservation.endTime}</h2>
                  <h6 style={{fontSize: "12px", fontWeight: "400", color: "grey", marginTop: "-4px"}}>{reservationEndDate}</h6>
                </div>
            </div>
          </div>

        </div>
      </div>







</div>


  )
}

export default  PaymentComplete
