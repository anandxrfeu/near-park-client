import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import {AuthContext} from '../contexts/authContext'
import { useContext } from "react"

import SideBarAdmin from "./layout/admin/SideBarAdmin";
import SubscriptionCreatePage from "../pages/subscriptions/SubscriptionCreatePage";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";

import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Logout from "../pages/auth/Logout";
import DashboardPage from "../pages/dashboard/DashboardPage";
import HomePage from "../pages/LandingPage";
import ProfilePage from "../pages/profile/ProfilePage";
import SubscriptionPage from "../pages/subscriptions/SubscriptionPage";
import SupportPage from "../pages/support/SupportPage";
import SaasHomePage from "../pages/SaasHomePage";
import OneReservationPage from '../pages/reservations/OneReservationPage'
import ReservationPage from "../pages/reservations/ReservationPage";
import ParkingLotCreatePage from "../pages/parkingLots/ParkingLotCreatePage";
import ParkingLotPage from "../pages/parkingLots/ParkingLotPage";



function App() {
   const {loggedInUser} = useContext(AuthContext)

  return (

        <Routes>
          <Route exact path="/" element={ <HomePage />} />
          <Route path="/auth">
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />

          </Route>
          <Route path="/saas">
            <Route path='' element={(<Container>
                                     {loggedInUser.user.role === "OWNER" ? <Sidebar /> : <SideBarAdmin />}
                                      <SaasHomePage />
                                    </Container>
                                    )}
              />
            <Route path='dashboard' element={(
                                                  <Container>
                                                    {loggedInUser.user.role === "OWNER" ? <Sidebar /> : <SideBarAdmin />}
                                                    <DashboardPage />
                                                  </Container>
                                                  )}
              />
            {loggedInUser.user.role === "OWNER" && <Route path='reservations' element={(
                                                  <Container>
                                                    <Sidebar />
                                                    <ReservationPage />
                                                  </Container>
                                                  )}
              />}

            {loggedInUser.user.role === "OWNER" && <Route path='reservation/:id' element={(
                                                  <Container>
                                                    <Sidebar />
                                                    <OneReservationPage />
                                                  </Container>
                                                  )}
              />}
            {loggedInUser.user.role === "OWNER" && <Route path='parkinglots' element={(
                                                  <Container>
                                                    <Sidebar />
                                                    <ParkingLotPage />
                                                  </Container>
                                                  )}
            />}
            {loggedInUser.user.role === "OWNER" && <Route path='parkinglots/create' element={(
                                                  <Container>
                                                    <Sidebar />
                                                    <ParkingLotCreatePage />
                                                  </Container>
                                                  )}
            />}

            <Route path='subscription' element={(
                                                <Container>
                                                  {loggedInUser.user.role === "OWNER" ? <Sidebar /> : <SideBarAdmin />}
                                                  <SubscriptionPage />
                                                </Container>
                                                )}
            />
            <Route path='profile' element={(
                                                <Container>
                                                 {loggedInUser.user.role === "OWNER" ? <Sidebar /> : <SideBarAdmin />}
                                                  <ProfilePage />
                                                </Container>
                                                )}
            />
            <Route path='support' element={(
                                                <Container>
                                                  {loggedInUser.user.role === "OWNER" ? <Sidebar /> : <SideBarAdmin />}
                                                  <SupportPage />
                                                </Container>
                                                )}
            />
            {loggedInUser.user.role === "ADMIN" && <Route path='subscription/create' element={(
                                                  <Container>
                                                    <SideBarAdmin />
                                                    <SubscriptionCreatePage/>
                                                  </Container>
                                                  )}
            />}

          </Route>
        </Routes>

  );
}

export default App;
