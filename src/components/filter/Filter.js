import "./Filter.css"

const Filter = (props) => {

    const {btnText, filterFunction} = props

    
    return (
        <button value={btnText} onClick={e => filterFunction(e.target.value)} className="filter badge-pill">
        {btnText}
      </button>
    )
}

export default Filter;