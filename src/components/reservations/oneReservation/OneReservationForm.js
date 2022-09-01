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
    <div style={{width:"100%", height:"100%", border:" 3px solid red", display:"flex", flexDirection:"column"}}>
      <div style={{width:"100%", height:"40%", border:" 3px solid blue"}}>
        <table style={{border: "3px solid green", width: "100%", height: "100%"}}>
           <thead style={{height: "100%", width: "100%", paddingTop: "0.2%"}}>
              <tr style={{border: "1px solid black", display: "flex", flexDirection: "row",
              justifyContent: 'space-between', fontSize:"1.2em", height:"100%", width:"100%", paddingTop:"0.3%"}}>
                <th  style={{border: "1px solid blue", width:"10%", textAlign:"center", paddingLeft:"0.5%", height:"100%"}}>TICKET #</th>
                <th  style={{border: "1px solid blue", width:"10%", textAlign:"center", height:"100%"}}>CHECK-IN</th>
                <th  style={{border: "1px solid blue", width:"18%",  textAlign:"center", height:"100%"}}>LICENSE PLATE</th>
                <th  style={{border: "1px solid blue", width:"14%",  textAlign:"center", height:"100%"}}>TYPE</th>
                <th  style={{border: "1px solid blue", width:"26%", textAlign:"center", height:"100%" }}>DESCRIPTION</th>
                <th  style={{border: "1px solid blue", width:"11%", textAlign:"left", height:"100%"}}></th>
              </tr>
            </thead>
          </table>
      </div>
      <div style={{width:"100%", height:"60%", border:" 3px solid yellow"}}>
        <div style={{width:"100%", height:"100%", border:" 3px solid blue", paddingTop: "0.3%"}}>
             <form style={{width: "100%", height:"90%", border: "3px solid green", display: "flex",
                flexDirection: "row", justifyContent: "space-between", minHeight: "70%"
                }} onSubmit={editHandler}>
                <div style={{border: "1px solid blue", width: "10%", height:"100%"}} >
                  <p style={{border: "1px solid red",fontSize: "2em", fontWeight: "bold", width: "100%", height:"94%",  textAlign: "center"}}>{ticketCode}</p>
                </div>
                <div style={{border: "1px solid blue", width: "10%", height:"100%"}}>
                  <p style={{border: "1px solid red", fontSize: "2em",  width: "100%", height:"94%", textAlign: "center"}}>{checkIn}</p>
                </div>
                <div style={{border: "1px solid blue", width: "18%", height:"100%"}}>
                    <input className="LicensePlateOne badge-pill"
                      style={{ width: "100%" , fontWeight: "bold", fontSize: "1.6em", height: "94%"}}
                      placeholder = "LICENSE PLATE"
                      type="text"
                      name="LicensePlate"
                      maxLength={"8"}
                      onChange={(e) => setLicensePlate(e.target.value)}
                      value={licensePlate}
                    />
                </div>
                <div className='vehicleType' style={{border: "1px solid blue", width: "14%", height:"100%"}}>
                  <select value={vehicleType} className="vehicleType  badge-pill"
                    style={{width: "100%", textAlign: "center", height: "94%"}}
                    onChange={(e) => setVehicleType(e.target.value) }>
                      <option className='vehicleType'>VEHICLE TYPE</option>
                      <option className='vehicleType' value="CAR">Carro</option>
                      <option className='vehicleType' value="MOTORBIKE">Moto</option>
                  </select>
                </div>
                <div style={{border: "1px solid blue", width: "26%", height:"100%"}}>
                    <input className="Vehicle-DescriptionOne badge-pill"
                          style={{width: "100%", height: "94%"}}
                          placeholder = "VEHICLE DESCRIPTION"
                          type="text"
                          maxLength={"27"}
                          name="VehicleDescription"
                          onChange={(e) => setVehicleDescription(e.target.value)}
                          value={vehicleDescription}
                        />
                </div>
                <div style={{border: "1px solid blue", width: "10%", marginRight: "10px", height:"100%"}} >
                  <button className='formBtnOne badge-pill' style={{border: "1px solid black", width: "100%",  height: "94%"}} type="submit">EDIT</button>
                </div>
             </form>

        </div>


      </div>


    </div>



  )
}

export default OneReservationForm
