import {useState} from "react";
import './OneReservationForm.css'

const OneReservationForm = () => {

  const [licensePlate, setLicensePlate] = useState('')
  const [vehicleType, setVehicleType] = useState('')
  const [vehicleDescription, setVehicleDescription] = useState('')
  const [guestUserPhone, setGuestUserPhone] = useState('')



  return (
    <div>
    <p>Form</p>
    <div>
        <table style={{marginTop: "12px", border: "3px solid green", width: "100%"}}>
            <thead >
                <div >
                  <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                      <div>
                        <th  style={{border: "2px solid yellow", paddingLeft:"20px"}}>TICKET #</th>
                      </div>
                      <div style={{ marginLeft: "-40px"}}>
                        <th  style={{border: "2px solid yellow"}}>CHECK-IN</th>
                      </div>
                      <div style={{marginLeft: "-20px"}}>
                        <th  style={{border: "2px solid yellow"}}>LICENSE PLATE</th>
                      </div>
                      <div style={{ marginRight: "90px", marginLeft: "14px"}}>
                        <th  style={{border: "2px solid yellow" }}>TYPE</th>
                      </div>
                      <div style={{ marginRight: "10px"}}>
                        <th  style={{border: "2px solid yellow"}}>DESCRIPTION</th>
                      </div>
                      <div  style={{ marginRight: "150px" }}>
                         <th style={{border: "2px solid yellow"}}>STATUS</th>
                      </div>
                  </tr>
                </div>
            </thead>
            </table>
    </div>

      <div className="OneReservationFormContainer">
        <form className="FormCreateStyle">
          <div className="FormCreate  container-xxl" >
            <div style={{marginLeft: "14px"}}>
              <p style={{fontSize: "32px", fontWeight: "bold"}}>005</p>
            </div>
            <div style={{marginLeft: "50px", marginRight: "50px"}}>
              <p style={{fontSize: "32px"}}>01:38</p>
            </div>
            <div style={{ marginLeft: "-30px"}}>
                <input className="LicensePlateOne badge-pill"
                  placeholder = "LICENSE PLATE"
                  type="text"
                  name="LicensePlate"
                  onChange={(e) => setLicensePlate(e.target.value)}
                  value={licensePlate}
                />
              </div>
                <div className='vehicleType'>
                  <select value="vehicleType" className="vehicleTypeOne  badge-pill">
                    <option className='vehicleType'>VEHICLE TYPE</option>
                    <option className='vehicleType' value="Car">Carro</option>
                    <option className='vehicleType' value="Motorbike">Moto</option>
                  </select>
                </div>
                <div>
                    <input className="Vehicle-DescriptionOne badge-pill" style={{width: "320px"}}
                      placeholder = "VEHICLE DESCRIPTION"
                      type="text"
                      name="VehicleDescription"
                      onChange={(e) => setVehicleDescription(e.target.value)}
                      value={vehicleDescription}
                    />
                  </div>
                  <div>
                    <p className="rounded-circle" style={{marginRight:"20px", marginTop:"8px", border: "2px solid black", width: "38px", height: "38px", backgroundColor: "#FED000"}}></p>
                  </div>


              <div>
                <button className='formBtnOne badge-pill' type="submit">EDIT</button>
              </div>
            </div>
        </form>
      </div>
    </div>


  )
}

export default OneReservationForm
