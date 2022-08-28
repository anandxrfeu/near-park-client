import './ReservationList.css'
import {Link} from 'react-router-dom';

const ReservationList = (props) => {
  const {reservationList} = props

   console.log('reservationList', reservationList)

    const formatTime = (time) => {
    return Number(time) < 10 ? `0${time}` : time
  }

  return (
    <>
      <div className="TableReservation" style={{marginTop: "20px", border: "1px solid black"}}>
         <table style={{marginTop: "12px", border: "3px solid green", width: "100%"}}>
            <thead >
                <div >
                  <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                      <div style={{border: "1px solid green", width:"100px"}}>
                        <th  style={{border: "2px solid yellow", paddingLeft:"20px"}}>TICKET #</th>
                      </div>
                      <div style={{border: "1px solid green", width:"86px", marginLeft: "42px"}}>
                        <th  style={{border: "2px solid yellow"}}>CHECK-IN</th>
                      </div>
                      <div style={{border: "1px solid green", width:"128px", marginLeft: "12px"}}>
                        <th  style={{border: "2px solid yellow"}}>LICENSE PLATE</th>
                      </div>
                      <div  style={{border: "1px solid green", width:"48px",  marginRight: "110px", marginLeft: "42px"}}>
                        <th  style={{border: "2px solid yellow"}}>TYPE</th>
                      </div>
                      <div style={{border: "1px solid green", width:"116px", marginRight: "50px"}}>
                        <th  style={{border: "2px solid yellow"}}>DESCRIPTION</th>
                      </div>
                      <div  style={{border: "1px solid green", width:"70px", marginRight: "10px"}}>
                         <th style={{border: "2px solid yellow"}}>STATUS</th>
                      </div>
                  </tr>
                </div>
            </thead>
            <div className="scrollit" >
              <tbody>
                <div>
                  {/* <div style={{height: "55px", border: "2px solid Black"}}>
                    <tr style={{border: "2px solid grey", display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "50px", width: "1200px"}}>
                        <td style={{border: "2px solid blue"}}><span style={{marginLeft: "20px", border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>005</span></td>
                        <td style={{marginLeft: "48px", border: "2px solid blue"}}><span  style={{border: "2px solid red", fontSize: "28px"}}>01:36</span></td>
                        <td  style={{marginLeft: "28px", border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px", fontWeight: "bold"}}>AAA-1234</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "28px"}}>CARRO</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{border: "2px solid red", fontSize: "24px"}}>VW JETTA PRETO</span></td>
                        <td style={{border: "2px solid blue"}}><span style={{ paddingRight: "15px", border: "2px solid red"}}>ACTIVE</span></td>
                    </tr>
                  </div> */}
                  {reservationList.map( reservation => {
                    reservation.statusCode = reservation.status === "CLOSED" ? 'Inactive' : 'Active' ;
                    const startDateTime = new Date(reservation.createdAt)
                    reservation.startTime = `${formatTime(startDateTime.getHours())} : ${formatTime(startDateTime.getMinutes())} `;
                    return (
                      <div key={reservation._id} style={{height: "55px", border: "2px solid Black"}}>
                        <tr style={{border: "2px solid grey", display: "flex", flexDirection: "row", justifyContent: 'space-between', height: "50px", width: "1200px"}}>
                            <td style={{border: "2px solid blue",  width:"120px"}}><span style={{marginLeft: "20px", border: "2px solid red", fontSize: "28px", fontWeight: "bold", width:"120px"}}>{reservation.ticket}</span></td>
                            <td style={{marginLeft: "48px", border: "2px solid blue", width: "108px", textAlign: "center"}}><span  style={{border: "2px solid red", fontSize: "28px", width: "116px"}}>{reservation.startTime}</span></td>
                            <div style={{width: "180px"}}>
                               <td  style={{marginLeft: "28px", border: "2px solid blue", width: "180px", textAlign: "left"}}><span style={{border: "2px solid red", fontSize: "28px", fontWeight: "bold", width: "180px"}}>{reservation.vehicle.licensePlate}</span></td>
                            </div>

                            <div style={{width: "164px"}}>
                              <td style={{border: "2px solid blue", width: "164px"}}><span style={{border: "2px solid red", fontSize: "28px", width: "164px"}}>{reservation.vehicle.type}</span></td>
                            </div>

                            <td style={{border: "2px solid blue", width: "280px"}}><span style={{border: "2px solid red", fontSize: "24px",  width: "280px"}}>{reservation.vehicle.description}</span></td>
                            <Link to={`/saas/reservation/${reservation._id}`}>
                              <div style={{marginRight: "24px", marginTop:"4px", width:"38px"}}>
                                <td className={reservation.status !== "CLOSED" ? "statusActive rounded-circle" : "statusClosed rounded-circle"} ></td>
                                {/* {reservation.statusCode} */}
                              </div>
                            </Link>


                        </tr>
                      </div>

                    )


                  })}

                </div>
              </tbody>
            </div>
          </table>

      </div>

    </>
  )
}

export default ReservationList
