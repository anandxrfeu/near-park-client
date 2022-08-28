import { useState } from "react"

const SearchReservation = (props) => {

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
      <search>
            <form>
              <div className="SearchForm">
                <div>
                    <input className="searchForm badge-pill"  style={{width: "520px", height: "72px", fontSize: "26px", fontWeight: "400"}}
                      placeholder="Search By License Plate or Cel Number"
                      type="text"
                      name="searchForm"
                      value={search}
                      onChange={searchHandler}
                    />
                  </div>
                </div>
            </form>
        </search>
  )
}

export default SearchReservation
