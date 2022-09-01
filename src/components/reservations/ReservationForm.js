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

     <div className="PLOFormContainer">
      <form className="FormCreateStyle" onSubmit={(onSubmitHandler)}>
        <div className="FormCreate  container-xxl" >
            <div>
              <input className="LicensePlate badge-pill"
                style={{marginLeft: "8px"}}
                placeholder = "LICENSE PLATE"
                type="text"
                name="LicensePlate"
                maxLength={"8"}
                onChange={(e) => setLicensePlate(e.target.value)}
                value={licensePlate}
              />
            </div>
              <div className='vehicleType' >
                <select value={vehicleType} className="vehicleType  badge-pill"
                onChange={(e) => setVehicleType(e.target.value) }>
                  <option className='vehicleType'>VEHICLE TYPE</option>
                  <option className='vehicleType' value="CAR">Carro</option>
                  <option className='vehicleType' value="MOTORBIKE">Moto</option>
                </select>
              </div>
              <div>
                  <input className="Vehicle-Description badge-pill" style={{width: "320px"}}
                    placeholder = "VEHICLE DESCRIPTION"
                    type="text"
                    maxLength={"27"}
                    name="VehicleDescription"
                    onChange={(e) => setVehicleDescription(e.target.value)}
                    value={vehicleDescription}
                  />
                </div>
              <div>
                  <input className="GuestUserPhoneForm badge-pill"
                    style={{textAlign: "center"}}
                    placeholder = "CELLPHONE NUMBER"
                    type="number"
                    name="GuestUserPhone"
                    onChange={(e) => setGuestUserPhone(e.target.value)}
                    value={guestUserPhone}
                  />
                </div>


            <div  style={{marginRight: "20px"}}>
              <button className='formBtn badge-pill' type="submit">SUBMIT</button>
            </div>
          </div>
      </form>
    </div>

  )
}

export default ReservationPLOForm
