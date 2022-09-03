import NearParkLogo from '../assets/icons/Near Park Logo 4-04.png'
import {Link} from 'react-router-dom'
import parkingLotIcon from '../assets/icons/parking_car_maps_location_placeholder_icon.png'

const LandingPage = (props) => {
    return (
      <div className="text-center" style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
       <navbar style={{backgroundColor: "black", width: "100%", height:"60px" , position: "fixed", color:"white"}}>
        <nav style={{display: "flex", flexDirection: "row", justifyContent:"right"}}>
          <div style={{display: "flex", flexDirection: "row", marginTop:"6px"}}>
            <div style={{marginRight:"16px"}}>
              <Link to="/auth/login">
                <button className='badge-pill' style={{width: "140px", height:"46px", border: "1px solid white", backgroundColor: "black", color: "white"}}>LOGIN</button>
              </Link>
            </div>
          </div>
        </nav>

      </navbar>
      <div style={{height:"90vh"}}>
        <div style={{marginTop: "180px"}}>
           <img style={{width: "45%", height: '30%'}} src={NearParkLogo} alt="logo-nearby"/>
        </div>
        <div style={{marginTop: "40px"}}>
          <Link to="/auth/signup">
            <button className='badge-pill' style={{width: "620px", height: "80px",
            backgroundColor: "white", color: "black", fontSize: "28px", border:"2px solid black", fontWeight: "300"}}>
              CREATE YOUR ACCOUNT
            </button>
          </Link>
        </div>

      </div>

        <div style={{marginTop: "88px", marginBottom: "70px"}}>
          <h1 style={{fontSize: "98px", fontWeight:"800"}}>HOW IT WORKS</h1>
        </div>
        <div style={{display: "flex", flexDirection: "row", alignItems:"center", width: "100%", justifyContent: "center"}}>
          <div style={{border: "1px Solid Black", width: "300px", height: "220px",  marginRight: "80px"}}>
              <div style={{display: "flex", justifyContent: "center", alignSelf: 'center'}}>
                <p style={{backgroundColor: "black", width:"68px", height: "68px", color: "white"
                , border: "1px solid black",
                borderRadius: "50%", textAlign: "center", fontSize: "32px", fontWeight: "bold", paddingTop:"6px"}}>4</p>
              </div>
          </div>
          <div style={{display: "flex", flexDirection: "column"}}>
            <div style={{border: "1px Solid grey", width: "340px", height: "260px", display:"flex", flexDirection:"column", borderRadius: "12px"}}>
              <div style={{display: "flex", justifyContent: "center", alignSelf: 'center', marginTop:"16px"}}>
                <p style={{backgroundColor: "black", width:"68px", height: "68px", color: "white"
                , border: "1px solid black",
                borderRadius: "50%", textAlign: "center", fontSize: "32px", fontWeight: "bold", paddingTop:"6px"}}>1</p>
              </div>
              <div style={{marginTop:"24px"}}>
                <img style={{width:"66px", height: "66px"}} src={parkingLotIcon} alt="parking-lot"/>
              </div>
              <div style={{marginTop:"16px"}}>
                <h4 style={{fontWeight: "300"}}>Register your Parking Lot</h4>
              </div>

            </div>
            <div style={{border: "1px Solid Black", width: "300px", height: "220px", marginTop: "220px"}}>
              <div style={{display: "flex", justifyContent: "center", alignSelf: 'center'}}>
                  <p style={{backgroundColor: "black", width:"68px", height: "68px", color: "white"
                  , border: "1px solid black",
                  borderRadius: "50%", textAlign: "center", fontSize: "32px", fontWeight: "bold", paddingTop:"6px"}}>3</p>
                </div>
            </div>
          </div>
          <div style={{border: "1px Solid Black", width: "300px", height: "220px", marginLeft: "80px"}}>
             <div style={{display: "flex", justifyContent: "center", alignSelf: 'center'}}>
                <p style={{backgroundColor: "black", width:"68px", height: "68px", color: "white"
                , border: "1px solid black",
                borderRadius: "50%", textAlign: "center", fontSize: "32px", fontWeight: "bold", paddingTop:"6px"}}>2</p>
              </div>
          </div>
        </div>
        <div style={{marginTop: '70px'}}>
          <div>
            <h1 style={{fontSize: "78px", fontWeight: "bold"}}>SUBSCRIPTION</h1>
          </div>
            <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"space-around", alignItems: "center", marginBottom: "80px", marginTop: "80px"}}>
              <div className="subscription-card" >
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                  <h2 style={{fontWeight: "bold", fontSize: "42px"}}>BASIC</h2>
                </div>
                <div style={{marginTop: "50px"}}>
                  <div className="benefits" style={{paddingLeft: "50px"}}>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>

                  </div>
                  <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                    <Link to="/auth/signup">
                        <button
                              style={{width: "260px", border: "1px solid black"}}
                              className="badge-pill"

                      >SUBSCRIBE</button>
                    </Link>
                  </div>
                  <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>R$ 89/ month</h3>
                </div>
              </div>
              <div className="subscription-card" >
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                  <h2 style={{fontWeight: "bold", fontSize: "42px"}}>BASIC</h2>
                </div>
                <div style={{marginTop: "50px"}}>
                  <div className="benefits" style={{paddingLeft: "50px"}}>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "24px", fontWeight: "bold"}}>MOBILE RESERVATIONS</h4>

                  </div>
                  <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                    <Link to="/auth/signup">
                        <button
                              style={{width: "260px", border: "1px solid black"}}
                              className="badge-pill"

                      >SUBSCRIBE</button>
                    </Link>
                  </div>
                  <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>R$ 89/ month</h3>
                </div>
              </div>
            </div>
        </div>
        <footer style={{backgroundColor: "black", width: "100%", height: "140px" , color: "white"}}>
            <p className="text-center" style={{marginTop: "30px", marginBottom: "30px"}}>Created By</p>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around",
            fontSize: '34px', fontWeight: "200px", alignItems: 'center', width: "100%"}}>
              <div>
                <h1>Anand Naidu</h1>
              </div>
              <div>
                <h1>Christian Landsberger</h1>
              </div>
            </div>
        </footer>

      </div>

)}

export default LandingPage;
