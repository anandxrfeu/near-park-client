import './Filter.css'


const FilterList = (props) => {
  const {filterReservations, reservationsByCard, reservationsByCash} = props

console.log(reservationsByCard)

  const clickHandler = (e) => {
   filterReservations(e.target.value)
  }

  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center",  border: "1px solid red"}}>
        <button value="ALL" className="filter1 badge-pill" onClick={clickHandler}>
          CHECK-IN LIST
        </button>
        <button value="CASH" className="filter2 badge-pill " onClick={clickHandler} >
          CASH<span className="badge badge-success rounded-circle" style={{textAlign: "center", display: "flex", justifyContent:"center", marginBottom: "20px"}}>{reservationsByCash}</span>
        </button>
        <button  value="CARD" onClick={clickHandler} type="button" className="filter3 badge-pill" style={{ display: "flex", justifyContent:"baseline", flexDirection: "row",paddingTop: "12px"}} >
            CARD <span className="badge badge-success rounded-circle" style={{textAlign: "center", display: "flex", justifyContent:"center", marginBottom: "20px"}}>{reservationsByCard}</span>
        </button>
        <button value="CLOSED"  onClick={clickHandler} className="filter4 badge-pill">
          CHECK-OUT LIST
        </button>
      </div>
    </div>
  )
}

export default FilterList
