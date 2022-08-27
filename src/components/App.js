import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/LandingPage";
import ParkingLotPage from "../pages/ParkingLotPage";
import ProfilePage from "../pages/ProfilePage";
import ReservationPage from "../pages/ReservationPage";
import SubscriptionPage from "../pages/SubscriptionPage";
import SupportPage from "../pages/SupportPage";
import SaasHomePage from "../pages/SaasHomePage";
import OneReservationPage from '../pages/OneReservationPage'


import { AuthContextComponent } from "../contexts/authContext";
import ParkingLotCreatePage from "../pages/ParkingLotCreatePage";
import Logout from "../pages/auth/Logout";
import {AuthContext} from '../contexts/authContext'

import { useEffect, useState, useContext } from "react"
import SideBarAdmin from "./layout/Sidebar Admin/SideBarAdmin";
import SubscriptionCreatePage from "../pages/admin/SubscriptionCreatePage";


function App() {
  // const {loggedInUser} = useContext(AuthContext)
   const {isLoading, loggedInUser} = useContext(AuthContext)

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
                                      <Sidebar />
                                      <SaasHomePage />
                                    </Container>
                                    )}
              />
            <Route path='dashboard' element={(
                                                  <Container>
                                                    <Sidebar />
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
                                                  <Sidebar />
                                                  <SubscriptionPage />
                                                </Container>
                                                )}
            />
            <Route path='profile' element={(
                                                <Container>
                                                  <Sidebar />
                                                  <ProfilePage />
                                                </Container>
                                                )}
            />
            <Route path='support' element={(
                                                <Container>
                                                  <Sidebar />
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
