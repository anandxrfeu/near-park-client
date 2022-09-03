import NearParkLogo from '../assets/icons/Near Park Logo 4-04.png'
import {Link} from 'react-router-dom'
import parkingLotIcon from '../assets/icons/parking_car_maps_location_placeholder_icon.png'
import './LandingPage.css'
import bannerRegister from '../assets/banners/banner-register.png'
import bannerManage from '../assets/banners/banner-manage.png'
import bannerTransactions from '../assets/banners/banner-transactions.png'
import bannerAnalytics from '../assets/banners/banner-analytics.png'

const LandingPage = (props) => {
    return (
      <div className="text-center" style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
       <navbar style={{backgroundColor: "black", width: "100%", height:"60px" , position: "fixed", color:"white"}}>
        <nav style={{display: "flex", flexDirection: "row", justifyContent:"right"}}>
          <div style={{display: "flex", flexDirection: "row", marginTop:"6px"}}>
            <div style={{marginRight:"16px"}}>
              <Link to="/auth/login">
                <button className='badge-pill login'>LOGIN</button>
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
            <button className='badge-pill accountCreate' >
              CREATE YOUR ACCOUNT
            </button>
          </Link>
        </div>

      </div>
      <div style={{height:"90vh"}}>
          <div style={{marginTop: "88px", marginBottom: "70px"}}>
            <h1 style={{fontSize: "98px", fontWeight:"800"}}>HOW IT WORKS</h1>
          </div>
          <div style={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"baseline", width: "52vw"}}>
            <div style={{display: "flex", flexDirection:"column", alignItems:"center", justifyContent:"left" }}>
              <div style={{border:"1px solid black", width: "25vw"}}>
                <img src={bannerRegister} alt="banner-register"/>
              </div>
              <div style={{border:"1px solid black", width: "25vw", marginTop: "30px"}}>
                <img src={bannerTransactions} alt="banner-transactions"/>
              </div>
            </div>
            <div style={{display: "flex", flexDirection:"column",  alignItems:"center", justifyContent:"left"}}>
              <div style={{border:"1px solid black", width: "25vw"}}>
                  <img src={bannerManage} alt="banner-manage"/>
              </div>
              <div style={{border:"1px solid black", width: "25vw", marginTop: "30px"}}>
                <img src={bannerAnalytics} alt="banner-analytics"/>
              </div>
            </div>
          </div>
      </div>
      <div>
        <div style={{marginTop: '460px', marginBottom:"160px"}}>
          <div>
            <h1 style={{fontSize: "78px", fontWeight: "bold"}}>SUBSCRIPTION</h1>
          </div>
            <div style={{display: "flex", flexDirection: "row", flexWrap:"wrap", justifyContent:"space-around", alignItems: "center", marginBottom: "80px", marginTop: "40px"}}>
              <div className="subscription-card" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}}>
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px", align: "top"}}>
                  <h2 style={{fontWeight: "bold", fontSize: "42px"}}>BASIC</h2>
                </div>
                <div style={{marginTop: "50px"}}>
                  <div className="benefits" style={{textAlign: "left"}} >
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>800 RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>CASHIER & 5 PARKING LOTS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>MOBILE TICKET MANAGEMENT</h4>

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
              <div className="subscription-card" style={{display: "flex", flexDirection:"column", justifyContent:"center", alignItems: "center"}} >
                <div style={{display: "flex", justifyContent: "center", marginTop: "20px"}}>
                  <h2 style={{fontWeight: "bold", fontSize: "42px"}}>STANDARD</h2>
                </div>
                <div style={{marginTop: "50px"}}>
                  <div className="benefits"  style={{textAlign: "left"}}>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>UNLIMITED RESERVATIONS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>CASHIER & 20 PARKING LOTS</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>MOBILE TICKET MANAGEMENT</h4>
                      {/* <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>DASHBOARD</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>FINANCIAL ACCOUNTING</h4>
                      <h4 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "400"}}>SUPPORT</h4> */}

                  </div>
                  <div  style={{display: "flex", justifyContent: "center", marginTop: "40px"}}>
                    <Link to="/auth/signup">
                        <button
                              style={{width: "260px", border: "1px solid black"}}
                              className="badge-pill"

                      >SUBSCRIBE</button>
                    </Link>
                  </div>
                  <h3  style={{display: "flex", justifyContent: "center", marginTop: "50px", fontSize: "30px", fontWeight: "bold"}}>R$ 109/ month</h3>
                </div>
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
