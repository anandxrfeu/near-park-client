import {useState} from 'react'


const ChangeCashCalc = (props) => {

  const {calculateChange, reservationPrice} = props

  // const [CashAmount, setCashAmount] = useState("")
  const [ChangeAmount, setChangeAmount] = useState("")


  const calculateChangeHandler = (e) => {
    e.preventDefault()
    console.log("change Handler", ChangeAmount,reservationPrice)
    const changeTotal = ChangeAmount - reservationPrice;
    console.log("changeTotal", changeTotal)
    calculateChange(changeTotal)
  }

  return (
    // <div style={{height:"100%", width:"100%"}}>
    <div style={{height:"100%", width:"100%", border: "4px solid red", backgroundColor:"white"}}>
      <div style={{display: "flex", justifyContent:"center", alignItems: "center" , paddingTop: "5%",
           paddingBottom:"1%", height: "100%", width: "100%", backgroundColor: "white", border:"2px solid yellow"}}>

        <form onSubmit={calculateChangeHandler} style={{width: "100%", height: "100%"}}>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", width:"100%", height:"100%", paddingBottom:"2%"}}>
              <div style={{display: "flex", flexDirection:"column"}}>
                <h5 style={{fontWeight: "bold"}}>CHANGE FOR:</h5>
                <input style={{height: "80px", width: "134px", border: "1px solid black",
                  borderRadius: "16px", fontSize: "38px", textAlign: "center", fontWeight: "bold"}}
                  placeholder = "R$"
                  type="number"
                  name="ChangeAmount"
                  onChange={(e) => setChangeAmount(e.target.value)}
                  value={ChangeAmount}
                />
              </div>
              <div style={{paddingTop:"4.2%", marginLeft:"1.8%"}}>
                <button style={{height: "80px", width: "134px", color: "white", backgroundColor: "green",
                  border: "2px solid green",
                  borderRadius: "16px" }} type="submit">SUBMIT</button>
              </div>
             </div>

        </form>



      </div>



    </div>


  )
}

export default  ChangeCashCalc
