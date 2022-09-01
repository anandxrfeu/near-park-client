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
              <tr style={{border: "2px solid red", display: "flex", flexDirection: "row", justifyContent: 'space-between'}}>
                <th  style={{border: "2px solid yellow",  width:"10%", textAlign:"center"}}>TICKET #</th>
                <th  style={{border: "2px solid yellow", width:"10%", textAlign:"center"}}>CHECK-IN</th>
                <th  style={{border: "2px solid yellow", width:"16%",  textAlign:"center"}}>LICENSE PLATE</th>
                <th  style={{border: "2px solid yellow",  width:"16%",  textAlign:"center"}}>TYPE</th>
                <th  style={{border: "2px solid yellow", width:"32%", textAlign:"center"}}>DESCRIPTION</th>
                <th style={{border: "2px solid yellow", width:"7%", textAlign:"center"}}>STATUS</th>
              </tr>
            </thead>
            <tbody style={{width:"100%", display: "flex", flexDirection:"column", marginTop: "2px"}}>
                <div className="scrollit" style={{border: "3px solid red", width: "100%"}}>
                    {reservationList.map( reservation => {
                    reservation.statusCode = reservation.status === "CLOSED" ? 'Inactive' : 'Active' ;
                    const startDateTime = new Date(reservation.createdAt)
                    reservation.startTime = `${formatTime(startDateTime.getHours())} : ${formatTime(startDateTime.getMinutes())} `;
                    return (
                      <div key={reservation._id} style={{height: "52px", width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <tr style={{paddingRight:"0.1%",  height: "50px", border: "2px solid grey", width: "100%", display: "flex", flexDirection:"row", justifyContent: "space-between"}}>
                            <td style={{width: "10%", border:"1px solid red", textAlign: "left"}}><span style={{ width: "10%", fontSize: "1.8em", fontWeight: "bold"}}>{reservation.ticket}</span></td>
                            <td style={{width: "10%", border:"1px solid red", textAlign: "center"}}><span style={{border:"1px solid blue", width: "10%", fontSize: "1.8em"}}>{reservation.startTime}</span></td>
                            <td style={{width: "16%", textAlign: "left", border:"1px solid red"}}><span style={{border:"1px solid blue", width: "16%", fontSize: "1.8em", fontWeight: "bold"}}>{reservation.vehicle.licensePlate}</span></td>
                            <td style={{width: "16%", border:"1px solid red"}}><span style={{border:"1px solid blue", width: "16%", fontSize: "1.8em"}}>{reservation.vehicle.type}</span></td>
                            <td style={{width: "32%", border:"1px solid red", textAlign: "left"}}><span style={{width: "32%",  fontSize: "1.6em"}}>{reservation.vehicle.description}</span></td>
                            <td style={{width: "6.6%", border:"1px solid red", paddingLeft: "1.8%"}}>
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
