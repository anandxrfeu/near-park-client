import {useState} from "react";

import './ReservationForm.css'

const ReservationPLOForm = (props) => {
  const {createReservationHandler} = props


  const [licensePlate, setLicensePlate] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleDescription, setVehicleDescription] = useState('')
  const [guestUserPhone, setGuestUserPhone] = useState('')

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(licensePlate, vehicleType, vehicleDescription, guestUserPhone)

    const reservation =  {
    "vehicle" : {
        "type": vehicleType,
        "licensePlate": licensePlate,
        "description": vehicleDescription
    },
    "guestUserPhone": guestUserPhone,
    // "parkingLot": "62fac32c358457e4f17d85b7",
    // "owner": "62fabf9c358457e4f17d859b"
}
  createReservationHandler(reservation)
  }



  return (

     <div className="PLOFormContainer" style={{border: "1px solid black"}}>
      <form className="FormCreateStyle" onSubmit={(onSubmitHandler)} >
        <div className="FormCreate" style={{ width:"100%", fontSize:"1em"}}>
            <div style={{ width:"18%", marginLeft:"0.3%", display:"flex", justifyContent:"center"}}>
              <input className="badge-pill"
                style={{width:"98%", fontWeight:"bold"}}
                placeholder = "LICENSE PLATE"
                type="text"
                name="LicensePlate"
                maxLength={"8"}
                onChange={(e) => setLicensePlate(e.target.value)}
                value={licensePlate}
              />
            </div>
              <div className='vehicleType' style={{width:"20.2%", display:"flex", justifyContent:"center", marginLeft:"0.3%"}}>
                <select value={vehicleType} className="vehicleType  badge-pill"
                style={{width:"98%"}}
                onChange={(e) => setVehicleType(e.target.value) }>
                  <option className='vehicleType'>VEHICLE TYPE</option>
                  <option className='vehicleType' value="CAR">Carro</option>
                  <option className='vehicleType' value="MOTORBIKE">Moto</option>
                </select>
              </div>
              <div style={{ width: "30%", display:"flex", justifyContent:"center", marginLeft:"0.3%"}}>
                  <input className="Vehicle-Description badge-pill" style={{width: "98%"}}
                    placeholder = "VEHICLE DESCRIPTION"
                    type="text"
                    maxLength={"20"}
                    name="VehicleDescription"
                    onChange={(e) => setVehicleDescription(e.target.value)}
                    value={vehicleDescription}
                  />
                </div>
              <div style={{width:"25.8%", display:"flex", justifyContent:"center", marginLeft:"0.3%"}}>
                  <input className="GuestUserPhoneForm badge-pill"
                    style={{textAlign: "center", width:"98%"}}
                    placeholder = "CELLPHONE NUMBER"
                    type="number"
                    name="GuestUserPhone"
                    onChange={(e) => setGuestUserPhone(e.target.value)}
                    value={guestUserPhone}
                  />
                </div>


            <div  style={{width:"13%", display:"flex", justifyContent:"left", marginLeft:"0.3%"}}>
              <button className='formBtn badge-pill' type="submit">SUBMIT</button>
            </div>
          </div>
      </form>
    </div>

  )
}

export default ReservationPLOForm
