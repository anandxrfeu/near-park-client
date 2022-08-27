import './FilterList.css'


const FilterList = () => {


  return (
    <div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center",  border: "1px solid red"}}>
        <button className="filter1 badge-pill">
          CHECK-IN LIST
        </button>
        <button className="filter2 badge-pill" >
          CASH
        </button>
        <button type="button" className="filter3 badge-pill" style={{ display: "flex", justifyContent:"baseline", flexDirection: "row",paddingTop: "12px"}} >
            CARD <span className="badge badge-success rounded-circle" style={{textAlign: "center", display: "flex", justifyContent:"center", marginBottom: "20px"}}>5</span>
        </button>
        <button className="filter4 badge-pill">
          CHECK-OUT LIST
        </button>
      </div>
    </div>
  )
}

export default FilterList
