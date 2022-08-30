import NearParkLogo from '../assets/icons/Near Park Logo 4-04.png'
import {Link} from 'react-router-dom'

const LandingPage = (props) => {
    return (
      <div className="text-center" style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
        <div style={{marginTop: "40px"}}>
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
            <div style={{border: "1px Solid Black", width: "300px", height: "220px"}}>
              <div style={{display: "flex", justifyContent: "center", alignSelf: 'center'}}>
                <p style={{backgroundColor: "black", width:"68px", height: "68px", color: "white"
                , border: "1px solid black",
                borderRadius: "50%", textAlign: "center", fontSize: "32px", fontWeight: "bold", paddingTop:"6px"}}>1</p>
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
          <h1 style={{fontSize: "78px", fontWeight: "bold"}}>SUBSCRIPTION</h1>
          <div style={{marginBottom: "80px"}}> Subscription</div>
        </div>
        <footer style={{backgroundColor: "black", width: "100%", height: "140px" ,color: "white"}}>
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
