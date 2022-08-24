
import {useState} from 'react'
import './ParkingLotForm.css'

const ParkingLotForm = (props) => {

  const {parkingLot} = props

  console.log("parkingLotProp", parkingLot)

  const [parkingLotName, setParkingLotName] = useState('')
  const [parkingLotAddress, setParkingLotAddress] = useState('')
  const [oneHourPrice, setOneHourPrice] = useState('')
  const [oneHourAdditionalPrice, setOneHourAdditionalPrice] = useState('')
  const [eightHourPrice, setEightHourPrice] = useState('')
  const [twentyFourHourPrice, setTwentyFourHourPrice] = useState('')
  const [maxOccupancy, setMaxOccupancy] = useState('')

  return (

    <div>
     <form>
        <div>
           <div>
            <div>
              <input className="parkingLotName badge-pill"
                placeholder = "NAME"
                type="text"
                name="ParkingLotName"
                onChange={(e) => setParkingLotName(e.target.value)}
                value={parkingLotName}
              />
            </div>
          </div>
            <div>
              <input className="parkingLotAddress badge-pill"
                placeholder = "ADDRESS"
                type="text"
                name="ParkingLotAddress"
                onChange={(e) => setParkingLotAddress(e.target.value)}
                value={parkingLotAddress}
              />
            </div>
        </div>
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <div className="PricingTable" style={{display: "flex", flexDirection: "column"}}>
              <h1 style={{display: "flex", justifyContent: "center", paddingTop: "14px"}}>Pricing Table</h1>
              <div style={{display: "flex", justifyContent: "right", marginTop: "30px", flexDirection: "column", paddingRight: "30px"}}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "right", marginBottom: "18px"}}>
                    <div>
                      <h3>1HR = R$</h3>
                    </div>
                    <div style={{marginLeft: "60px"}}>
                      <input className="pricingTablePrice badge-pill"
                        placeholder = "R$"
                        type="number"
                        name="oneHourPrice"
                        onChange={(e) => setOneHourPrice(e.target.value)}
                        value={oneHourPrice}
                      />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "right",  marginBottom: "18px"}}>
                    <div>
                      <h3>1HR Additional = R$</h3>
                    </div>
                    <div style={{marginLeft: "60px"}}>
                      <input className="pricingTablePrice badge-pill"
                        placeholder = "R$"
                        type="number"
                        name="oneHourAdditionalPrice"
                        onChange={(e) => setOneHourAdditionalPrice(e.target.value)}
                        value={oneHourAdditionalPrice}
                      />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "right",  marginBottom: "18px"}}>
                    <div>
                      <h3>8HR = R$</h3>
                    </div>
                    <div style={{marginLeft: "60px"}}>
                      <input className="pricingTablePrice badge-pill"
                        placeholder = "R$"
                        type="number"
                        name="eightHourPrice"
                        onChange={(e) => setEightHourPrice(e.target.value)}
                        value={eightHourPrice}
                      />
                    </div>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "right",  marginBottom: "18px"}}>
                    <div>
                      <h3>24HR = R$</h3>
                    </div>
                    <div style={{marginLeft: "60px"}}>
                      <input className="pricingTablePrice badge-pill"
                        placeholder = "R$"
                        type="number"
                        name="twentyFourHourPrice"
                        onChange={(e) => setTwentyFourHourPrice(e.target.value)}
                        value={twentyFourHourPrice}
                      />
                    </div>
                </div>
            </div>


            </div>
          <div style={{display: "flex", flexDirection: "column"}}>
              <div style={{display: "flex", flexDirection: "column", marginTop: "30px"}}>
                <h2 style={{fontWeight: "bold"}}> Max Occupancy</h2>
                  <div style={{marginLeft: "40px"}}>
                      <input className="maxOccupancy badge-pill"
                        placeholder = "QTD "
                        type="number"
                        name="maxOccupancy"
                        onChange={(e) => setMaxOccupancy(e.target.value)}
                        value={maxOccupancy}
                      />
                  </div>
              </div>
              <div>
                  <button className='badge-pill' style={{backgroundColor: "black", color: "white", width: "240px", border: "black", marginTop: "270px"}}>
                    SAVE

                  </button>
              </div>

          </div>
      </div>

     </form>
    </div>


  )
}

export default ParkingLotForm
