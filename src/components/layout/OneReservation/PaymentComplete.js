import CheckOutIcon from '../../../assets/icons/check_complete_done_green_success_icon (2).png'

const PaymentComplete = () => {

  return (
<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "white"}}>
      <div style={{marginTop: "30px"}}>
        <div>
          <h3 style={{marginBottom: "-2px", fontSize: "24px"}}>PAYMENT STATUS</h3>
          <h1 style={{color: "green", fontWeight: "600", fontSize: "39px", marginLeft: "-2px" }}>COMPLETE</h1>
        </div>
      </div>
      <div style={{marginTop: "34px"}}>
        <div>
          <h2 style={{fontWeight: '400', fontSize: "32px"}}>CHECK-OUT CONFIRMED!</h2>
        </div>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: "16px"}}>
          <img style={{width: "150px", height: "150px"}} src={CheckOutIcon} alt="checkouticon"/>
        </div>
      <div style={{marginTop: "34px",  display: "flex", justifyContent: "center",
        alignContent: "center"}}>
        <div style={{border: "1px solid black", width: "314px", height: "114px",
        borderRadius: "16px", textAlign: "center", paddingTop: "14px",
        display: "flex", flexDirection: "row", justifyContent:"space-around", alignContent: "center" }}>
          <div>
            <h3 style={{fontSize: "16px", fontWeight: "300"}}>CHECK-IN</h3>
            <h2 style={{fontSize: "40px", fontWeight: "bold", marginTop: "-2px"}}>11:36</h2>
            <h6 style={{fontSize: "12px", fontWeight: "400", color: "grey",  marginTop: "-4px"}}>20/09/2022</h6>
          </div>
          <div>
            <h3 style={{fontSize: "16px", fontWeight: "300"}}>CHECK-OUT</h3>
            <h2 style={{fontSize: "40px", fontWeight: "bold",  marginTop: "-2px"}}>04:36</h2>
            <h6 style={{fontSize: "12px", fontWeight: "400", color: "grey", marginTop: "-4px"}}>21/09/2022</h6>
          </div>
        </div>
      </div>

      </div>
    </div>


  )
}

export default  PaymentComplete
