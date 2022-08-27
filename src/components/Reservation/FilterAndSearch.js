import './FilterAndSearch.css'
import {useState} from "react";


const FilterAndSearch = (props) => {

  const {searchReservation} = props

  const [search, setSearch] = useState('')

  const searchHandler = (e) => {
    e.preventDefault()
    //console.log("e.target.value", e.target.value) //12
    setSearch(e.target.value)
    //console.log("search-> ", search) //1   To DO - Ask nilton
    searchReservation(e.target.value)
  }

  return (
    <div style={{marginTop: "30px", border: "1px solid red"}} >
      <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
        <button className="badge-pill" style={{paddingLeft: "60px", paddingRight: "60px", color: "white", backgroundColor: "black", border: "black", height: "48px" }}>
          CHECK-IN LIST
        </button>
        <button className="badge-pill" style={{paddingLeft: "90px", paddingRight: "90px", color: "white", backgroundColor: "black", border: "black", marginLeft: "10px", height: "48px" }}>
          CASH
        </button>
        <button type="button" className="badge-pill" style={{paddingLeft: "80px", paddingRight: "80px", color: "white", backgroundColor: "black" , border: "black",  marginLeft: "10px", height: "48px" }}>
            CARD <span className="badge badge-success rounded-circle">5</span>
        </button>
        <button className="badge-pill" style={{paddingLeft: "60px", paddingRight: "60px", color: "white", backgroundColor: "black", border: "black",  marginLeft: "10px", height: "48px"  }}>
          CHECK-OUT LIST
        </button>
      </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "30px"}}>
        <div  style={{border: "4px solid black", borderRadius: "6px", backgroundColor: "black", width: "140px", height: "82px", marginTop: "20px"}}>
          <p style={{color: "white", paddingLeft: "15px", paddingTop: "8px"}}>OCCUPANCY</p>
          <h2 style={{color: "white", paddingLeft: "14px", fontWeight: "bold", fontSize: "34px", marginTop: "-12px"}}>22/50</h2>
        </div>
        <div>
          <div className="Search" style={{marginTop: "30px"}}>
            <form>
              <div className="SearchForm">
                <div>
                    <input className="searchForm badge-pill"  style={{width: "520px", height: "72px"}}
                      placeholder="Search By License Plate or Cel Number"
                      type="text"
                      name="searchForm"
                      value={search}
                      onChange={searchHandler}
                      //onKeyDown={searchHandler}
                    />
                  </div>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}
export default FilterAndSearch
