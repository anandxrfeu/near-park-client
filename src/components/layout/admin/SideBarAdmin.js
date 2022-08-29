import React, {useState} from 'react'
import './SideBarAdmin.css'
import hamburgerBar from "../../../assets/icons/bars_data_icon.png"
import {Link} from 'react-router-dom';
import dashboardIcon from "../../../assets/icons/analytics_chart_infographic_metrics_trends_icon.png"
import parkingLotIcon from "../../../assets/icons/parking_car_maps_location_placeholder_icon.png"
import subscriptionIcon from "../../../assets/icons/bank_cash_finance_money_payment_icon.png"
import supportIcon from "../../../assets/icons/and_chat_computers_hardware_head_icon.png"
import profileIcon from "../../../assets/icons/user_circle_gear_light_icon.png"
import homeIcon from "../../../assets/icons/home_house_icon.png"
import logoutIcon from "../../../assets/icons/logout_circle_line_icon (1).png"







const SideBarAdmin = () => {

  const [show, setShow] = useState(false)

  return (
    <main className={show ? 'space-toggle' : null}>
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className="nav">
            <div>
              <div className="nav-list">
                 <div>
                  <p className="hamburgerBar nav-link">
                    <img src={hamburgerBar}  onClick={() => {setShow(!show); console.log("clicked")}} className="nav-logo-icon" alt="barIcon"/>
                    <span className='nav-logo-name'>NEAR PARK</span>
                  </p>
                </div>
               {/* <Link to="/saas" className="nav-link">
                  <p className="homeIcon">
                    <img src={homeIcon} className="nav-link-icon" alt="homeIcon"/>
                    <span className='nav-link-name'>HOME</span>
                  </p>
                </Link> */}
                <Link to="/saas" className="nav-link">
                  <p className="dashboardIcon">
                    <img src={dashboardIcon} className="nav-link-icon " alt="dashboardIcon"/>
                    <span className='nav-link-name'>DASHBOARD</span>
                  </p>
                </Link>
                <Link to="/saas/users" className='nav-link'>
                  <p className="ParkingLotIcon">
                    <img src={parkingLotIcon} className="nav-link-icon" alt="parkingLotIcon"/>
                    <span className='nav-link-name'>USERS</span>
                  </p>
                </Link>
                <Link to="/saas/subscription" className='nav-link'>
                  <p className="SubscriptionIcon">
                    <img src={subscriptionIcon} className="nav-link-icon" alt="subscriptionIcon"/>
                    <span className='nav-link-name'>SUBSCRIPTIONS</span>
                  </p>
                </Link>
                <Link to="/saas/support" className='nav-link'>
                  <p className="supportIcon">
                    <img src={supportIcon} className="nav-link-icon" alt="supportIcon"/>
                    <span className='nav-link-name'>SUPPORT</span>
                  </p>
                </Link>
                <Link to="/saas/profile" className='nav-link'>
                  <p className="profileIcon">
                    <img src={profileIcon} className="nav-link-icon" alt="profileIcon"/>
                    <span className='nav-link-name'>PROFILE</span>
                  </p>
                </Link>
                <Link to="/auth/logout" className='nav-link'>
                  <p className="logoutIcon">
                    <img src={logoutIcon} className="nav-link-icon" alt="logoutIcon"/>
                    <span className='nav-link-name'>LOG OUT</span>
                  </p>
                </Link>

              </div>

            </div>
          </nav>
        </aside>
    </main>


  )


}

export default SideBarAdmin
