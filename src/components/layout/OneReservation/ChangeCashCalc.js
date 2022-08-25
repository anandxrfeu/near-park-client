import {useState} from 'react'


const ChangeCashCalc = () => {

  const [CashAmount, setCashAmount] = useState("")
  const [ChangeAmount, setChangeAmount] = useState("")
  const [ChangeTotal, setChangeTotal] = useState("")

  return (
    <div>
      <div style={{border: "1px solid black", height: "280px", marginTop: "25px", backgroundColor: "white"}}>
        <form>
          <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "row",  marginTop: "80px", marginLeft: "20px"}}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <h2 style={{fontSize: "78px"}}>DINHEIRO</h2>
                <input style={{width: "190px", height: "90px",  border: "1px solid Black", borderRadius: "16px",
                fontSize: "48px", textAlign: "center", fontWeight: "bold"
                }}
                  placeholder = "R$"
                  type="number"
                  name="CashAmount"
                  onChange={(e) => setCashAmount(e.target.value)}
                  value={CashAmount}


                />
                  {/* <input className="Vehicle-Description badge-pill" style={{width: "320px"}}
                    placeholder = "VEHICLE DESCRIPTION"
                    type="text"
                    name="VehicleDescription"
                    onChange={(e) => setVehicleDescription(e.target.value)}
                    value={vehicleDescription}
                  />                 */}

              </div>
              <div>
                <button style={{width: "140px", height: "90px", color: "white", backgroundColor: "green",
                border: "2px solid green", marginTop: "104px", marginLeft: "-150px",
                borderRadius: "16px" }} type="submit">SUBMIT</button>
              </div>
            </div>

            <div style={{display: "flex", flexDirection: "column", marginLeft: "110px", marginTop: "10px"}}>
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


          </div>
        </form>
      </div>


    </div>


  )
}

export default  ChangeCashCalc
