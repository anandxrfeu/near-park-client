import { useState } from "react"

const SearchReservation = () => {

 const [search, setSearch] = useState('')
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
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>
                </div>
            </form>
        </search>
  )
}

export default SearchReservation
