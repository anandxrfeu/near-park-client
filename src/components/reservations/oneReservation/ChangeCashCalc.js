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
    <div>
      <div style={{border: "1px solid black", height: "268px", marginTop: "25px", backgroundColor: "white"}}>
          <div style={{display: "flex", justifyContent:"center", alignItems: "center" , marginTop: "60px"}}>
            <form onSubmit={calculateChangeHandler}>
              <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "300px"}}>
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
                <div>
                  <button style={{height: "80px", width: "134px", color: "white", backgroundColor: "green",  marginTop:"32px",
                  border: "2px solid green",
                  borderRadius: "16px" }} type="submit">SUBMIT</button>
                </div>

              </div>
          </form>
          </div>

      </div>


    </div>


  )
}

export default  ChangeCashCalc
