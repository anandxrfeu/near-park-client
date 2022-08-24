import {useState} from "react";

import './ReservationPLOForm.css'

const ReservationPLOForm = () => {

  const [licensePlate, setLicensePlate] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleDescription, setVehicleDescription] = useState('')
  const [guestUserPhone, setGuestUserPhone] = useState('')


  return (

     <div className="PLOFormContainer">
      <form className="FormCreateStyle">
        <div className="FormCreate  container-xxl">
          <div>
              <input className="LicensePlate badge-pill"
                placeholder = "LICENSE PLATE"
                type="text"
                name="LicensePlate"
                onChange={(e) => setLicensePlate(e.target.value)}
                value={licensePlate}
              />
            </div>
              <div className='vehicleType'>
                <select value="vehicleType" className="vehicleType  badge-pill">
                  <option className='vehicleType'>VEHICLE TYPE</option>
                  <option className='vehicleType' value="Car">Carro</option>
                  <option className='vehicleType' value="Motorbike">Moto</option>
                </select>
              </div>
              <div>
                  <input className="Vehicle-Description badge-pill" style={{width: "320px"}}
                    placeholder = "VEHICLE DESCRIPTION"
                    type="text"
                    name="VehicleDescription"
                    onChange={(e) => setVehicleDescription(e.target.value)}
                    value={vehicleDescription}
                  />
                </div>
              <div>
                  <input className="GuestUserPhoneForm badge-pill"
                    placeholder = "CELLPHONE NUMBER"
                    type="number"
                    name="GuestUserPhone"
                    onChange={(e) => setGuestUserPhone(e.target.value)}
                    value={guestUserPhone}
                  />
                </div>


            <div>
              <button className='formBtn badge-pill' type="submit">SUBMIT</button>
            </div>
          </div>
      </form>
    </div>

  )
}

export default ReservationPLOForm
