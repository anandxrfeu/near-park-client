import {useState, useEffect} from "react";
import './OneReservationForm.css'

const OneReservationForm = (props) => {
  const {reservation, updateReservation} = props

  const [licensePlate, setLicensePlate] = useState("")
  const [vehicleType, setVehicleType] = useState("")
  const [vehicleDescription, setVehicleDescription] = useState("")
  const [ticketCode, setTicketCode] = useState("")
  const [checkIn, setCheckIn] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if(reservation && reservation.vehicle) {
      setLicensePlate(reservation.vehicle.licensePlate)
      setVehicleType(reservation.vehicle.type)
      setVehicleDescription(reservation.vehicle.description)
    }
    if(reservation) {
      setTicketCode(reservation.ticket)
      setCheckIn(reservation.startTime)
    }

    setIsLoading(false)

  }, [reservation])

  const editHandler = (e) => {
    e.preventDefault()
    const payload = {
      vehicle : {
        licensePlate : licensePlate,
        type : vehicleType,
        description: vehicleDescription,
      }

    }
    updateReservation(payload)
  }


if (isLoading) {
  return (
    <p>Loading ...</p>
  )
}





  return (
    <div>
    <div>
        <table style={{marginTop: "12px", border: "3px solid green", width: "100%"}}>
            <thead >
                <div >
                  <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                      <div style={{border: "1px solid black", width: "100px"}}>
                        <th  style={{border: "2px solid yellow", paddingLeft:"20px", width: "100px"}}>TICKET #</th>
                      </div>
                      <div style={{ marginLeft: "-64px", marginRight: "8px", border: "1px solid black", width: "86px"}}>
                        <th  style={{border: "2px solid yellow", width: "86px"}}>CHECK-IN</th>
                      </div>
                      <div style={{marginLeft: "8px", marginRight: "-6px",  border: "1px solid black", width: "128px"}}>
                        <th  style={{border: "2px solid yellow"}}>LICENSE PLATE</th>
                      </div>
                      <div style={{ marginRight: "52px", marginLeft: "-6px", border: "1px solid black", width: "48px"}}>
                        <th  style={{border: "2px solid yellow", width: "48px" }}>TYPE</th>
                      </div>
                      <div style={{ marginRight: "314px", border: "1px solid black", width: "116px"}}>
                        <th  style={{border: "2px solid yellow", width: "116px"}}>DESCRIPTION</th>
                      </div>
                  </tr>
                </div>
            </thead>
            </table>
    </div>

      <div className="OneReservationFormContainer">
        <form className="FormCreateStyle" onSubmit={editHandler}>
          <div className="FormCreate  container-xxl" >
            <div style={{marginLeft: "14px", width: "98px"}} >
              <p style={{fontSize: "32px", fontWeight: "bold", width: "98px"}}>{ticketCode}</p>
            </div>
            <div style={{marginLeft: "26px", marginRight: "50px", width: "140px"}}>
              <p style={{fontSize: "32px", fontWeight: "bold", width: "140px"}}>{checkIn}</p>
            </div>
            <div style={{ marginLeft: "-20px", width: "224px"}}>
                <input className="LicensePlateOne badge-pill"
                  style={{width: "224px"}}
                  placeholder = "LICENSE PLATE"
                  type="text"
                  name="LicensePlate"
                  onChange={(e) => setLicensePlate(e.target.value)}
                  value={licensePlate}
                />
              </div>
              <div className='vehicleType' style={{width: "156px"}}>
                <select value={vehicleType} className="vehicleType  badge-pill"
                style={{width: "156px"}}
                onChange={(e) => setVehicleType(e.target.value) }>
                  <option className='vehicleType'>VEHICLE TYPE</option>
                  <option className='vehicleType' value="CAR">Carro</option>
                  <option className='vehicleType' value="MOTORBIKE">Moto</option>
                </select>
              </div>
                <div style={{width: "320px"}}>
                    <input className="Vehicle-DescriptionOne badge-pill"
                      style={{width: "320px"}}
                      placeholder = "VEHICLE DESCRIPTION"
                      type="text"
                      name="VehicleDescription"
                      onChange={(e) => setVehicleDescription(e.target.value)}
                      value={vehicleDescription}
                    />
                  </div>
              <div style={{width: "120px", marginRight: "10px"}} >
                <button className='formBtnOne badge-pill' style={{border: "1px solid black"}} type="submit">EDIT</button>
              </div>
            </div>
        </form>
      </div>
    </div>


  )
}

export default OneReservationForm
