const ChangeTotal = () => {

  return (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center"}} >
      <div style={{marginTop: "90px"}}>
        <div style={{border: "2px solid black", borderRadius: "22px", width: "340px", display: "flex", justifyContent: "center",
        textAlign: "center", height: "250px"}}>
          <div>
              <div style={{backgroundColor: "black", color: "white", border: "0.1px solid black",
              borderRadius: "8px", height: "38px", width:"280px", marginTop: "22px"}}>
                <h3 style={{paddingTop: "2px"}}>TROCO</h3>
              </div>
              <div style={{marginTop: "36px"}}>
                <h1 style={{fontWeight: "bold", fontSize: "44px"}}>R$ 47,50</h1>
              </div>
              <div style={{marginTop: "36px"}}>
                <button className="badge-pill" style={{backgroundColor: "black", color: "white", border: "1px solid black", width: "100px", height: "40px"}}>OK</button>
              </div>
           </div>

        </div>

      </div>


    </div>


  )
}

export default  ChangeTotal
