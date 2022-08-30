
import {useEffect, useState} from 'react'
import QRCOde from '../qrcode/QRCode'
import './ParkingLotForm1.css'

const ParkingLotForm = (props) => {

  const [parkingLotName, setParkingLotName] = useState('')
  const [parkingLotAddress, setParkingLotAddress] = useState('')
  const [oneHourPrice, setOneHourPrice] = useState('')
  const [oneHourAdditionalPrice, setOneHourAdditionalPrice] = useState('')
  const [eightHourPrice, setEightHourPrice] = useState('')
  const [twentyFourHourPrice, setTwentyFourHourPrice] = useState('')
  const [maxOccupancy, setMaxOccupancy] = useState('')
  const [showQRCode, setShowQRCode] = useState(false)

  const {parkingLotSelect, onSubmitHandler} = props

  useEffect(()=>{  
    if(parkingLotSelect){
      setParkingLotName(parkingLotSelect.name)
      setParkingLotAddress(parkingLotSelect.address)
      setMaxOccupancy(parkingLotSelect.maxOccupancy)
    }
    if(parkingLotSelect && parkingLotSelect.pricing){
      setOneHourPrice(parkingLotSelect.pricing.oneHourPrice)
      setOneHourAdditionalPrice(parkingLotSelect.pricing.oneHourAdditionalPrice)
      setEightHourPrice(parkingLotSelect.pricing.eightHourPrice)
      setTwentyFourHourPrice(parkingLotSelect.pricing.twentyFourHourPrice)
    }
  },[parkingLotSelect])

  
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("submitHandler..")
    // onSubmitHandler({
    //   name:parkingLotName,
    //   address: parkingLotAddress,
    //   maxOccupancy: +maxOccupancy,
    //   pricing: {
    //     oneHourPrice, 
    //     oneHourAdditionalPrice, 
    //     eightHourPrice,
    //     twentyFourHourPrice
    //   }
    // })

  }

  const qrCodeClickHandler  = (e) => {
    e.preventDefault()
    setShowQRCode(!showQRCode)
  }

  return (
<>
      <form className="parkinglot-controls">

        <div>
              <input className="parkinglot-controls_name badge-pill"
                placeholder = "NAME"
                type="text"
                name="ParkingLotName"
                onChange={(e) => setParkingLotName(e.target.value)}
                value={parkingLotName}
              />
              <input className="parkinglot-controls_address badge-pill"
                placeholder = "ADDRESS"
                type="text"
                name="ParkingLotAddress"
                onChange={(e) => setParkingLotAddress(e.target.value)}
                value={parkingLotAddress}
              />
        </div>

        <div className="parkinglot-controls_pricing_ocupancy">
            <div className="parkinglot-controls_pricing-table">
                <h1 style={{display: "flex", justifyContent: "center", paddingTop: "14px"}}>Pricing Table</h1>
                <div style={{display: "flex", justifyContent: "right", flexDirection: "column", paddingRight: "30px"}}>
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

        <div className="parkinglot-controls_max-occupancy">
            <div style={{display: "flex", flexDirection: "column"}}>
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
            {showQRCode && parkingLotSelect && <QRCOde url={`http://${process.env.REACT_APP_MOBILE_APP}/client/parkinglot/${parkingLotSelect._id}`} />}
        </div>
              
        </div>
        </div>

        <div className="parkinglot-controls-btn-container">
          <div className="parkinglot-controls-btn-container-left">
            <button type="submit" className='parkinglot-controls_btn save-btn badge-pill' onClick={submitHandler}>
              SAVE
            </button>

            <button className='parkinglot-controls_btn qrcode-btn badge-pill' onClick={qrCodeClickHandler}>
              QR CODE
            </button>
          </div>
          <div className="parkinglot-controls-btn-container-right">
            <button className='parkinglot-controls_btn delete-btn badge-pill' onClick={qrCodeClickHandler}>
                DELETE
              </button>
          </div>
        </div>

     </form>
     


      </>
  )
}

export default ParkingLotForm
