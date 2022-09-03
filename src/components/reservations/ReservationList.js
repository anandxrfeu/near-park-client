import './ReservationList.css'
import {Link} from 'react-router-dom';

const ReservationList = (props) => {
  const {reservationList} = props
  const formatTime = (time) => {
  return Number(time) < 10 ? `0${time}` : time
}

  return (
    <>
      <div className="TableMainContainer">
        <table className="tableListMain table-hover">
            <thead>
              <tr style={{border: "1px solid black", display: "flex", flexDirection: "row", justifyContent: 'space-between', height:"42px", paddingTop: "6px", paddingRight:"1.2%" , fontSize:"1.06em"}}>
                <th  style={{width:"10.2%", textAlign:"left", paddingLeft:"0.5%"}}>TICKET #</th>
                <th  style={{width:"11%", textAlign:"center", paddingLeft:"0.2%"}}>CHECK-IN</th>
                <th  style={{width:"18%",  textAlign:"left", paddingLeft:"0.1%"}}>LICENSE PLATE</th>
                <th  style={{width:"16%",  textAlign:"left", paddingLeft:"0.1%"}}>TYPE</th>
                <th  style={{width:"32%", textAlign:"left", paddingLeft:"0.5%"}}>DESCRIPTION</th>
                <th style={{ width:"6.6%", textAlign:"center", marginRight:"0.5%", paddingRight:"1.5%"}}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{width:"100%", display: "flex", flexDirection:"column", marginTop: "8px"}}>
                <div className="scrollit" style={{ width: "100%"}}>
                    {reservationList.map( reservation => {
                    reservation.statusCode = reservation.status === "CLOSED" ? 'Inactive' : 'Active' ;
                    const startDateTime = new Date(reservation.createdAt)
                    reservation.startTime = `${formatTime(startDateTime.getHours())}:${formatTime(startDateTime.getMinutes())} `;
                    return (
                      <div key={reservation._id} style={{height: "52px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", marginBottom:"2px"}}>
                        <tr style={{paddingRight:"0.1%",  height: "50px", border: "1px solid grey", width: "100%", display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                            <td style={{width: "10.2%", textAlign: "left", paddingLeft:"0.5%"}}><span style={{ width: "10.2%", fontSize: "1.6em", fontWeight: "bold"}}>{reservation.ticket}</span></td>
                            <td style={{width: "10%", textAlign: "center"}}><span style={{ width: "10%", fontSize: "1.6em"}}>{reservation.startTime}</span></td>
                            <td style={{width: "18%", textAlign: "left"}}><span style={{ width: "18%", fontSize: "1.6em", fontWeight: "bold"}}>{reservation.vehicle.licensePlate}</span></td>
                            <td style={{width: "16%", textAlign: "left"}}><span style={{ width: "16%", fontSize: "1.4em"}}>{reservation.vehicle.type}</span></td>
                            <td style={{width: "32%", textAlign: "left"}}><span style={{width: "32%",  fontSize: "1.4em"}}>{reservation.vehicle.description}</span></td>
                            <td style={{ width: "6.6%", paddingLeft: "0.4%"}}>
                              <Link to={`/saas/reservation/${reservation._id}`}>
                              <div className={reservation.status !== "CLOSED" ? "statusActive rounded-circle" : "statusClosed rounded-circle"} style={{marginTop:"4px"}}>
                              </div>
                              </Link>
                            </td>
                        </tr>
                      </div>

                    )


                  })}

                 </div>
              </tbody>
        </table>
      </div>

    </>
  )
}

export default ReservationList
