import "./App.css";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/common/NavBar.jsx";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/common/Footer";
import ListPropertyPage from './pages/ListPropertyPage';
import {ToastContainer} from "react-toastify";
import ListPropertyWelcomePage from './pages/ListPropertyWelcomePage';
import GuestDashboard from "./pages/GuestDashboard";
import RenterDashboard from './pages/RenterDashboard';
import HotelDetails from './pages/HotelDetails';
import AddRoom from './components/listPropertyPageComponent/AddRoom';
import RoomCard from './pages/RoomCard';
import RenterRoute from './components/common/RenterRoute';
import RoomDescription from './components/RoomDetailsPageComponents/RoomDescription';

function App() {
  return (
    <React.Fragment>
      <ToastContainer
          position="top-center"
          autoClose={5000000}
        />
      <NavBar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/dashboard" component={GuestDashboard} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/hoteldetails/:hotelId" component={HotelDetails} />
        <Route path="/hotel/roomdescription" component={RoomDescription} />
        <Route path="/renter/welcome" component={ListPropertyWelcomePage} />
        <Route path="/renter/signin" component={SigninPage} />
        <Route path="/renter/signup" component={SignupPage} />
        <RenterRoute path="/renter/dashboard" component={RenterDashboard} />
        <RenterRoute path="/renter/room/:hotelId" component={RoomCard} />
        <RenterRoute path="/renter/listproperty/:id" component={ListPropertyPage} />
        <RenterRoute path="/renter/listproperty" component={ListPropertyPage} />
        <RenterRoute path="/renter/addroom/:hotelId" component={AddRoom} />
        <RenterRoute path="/renter/editroom/:roomId" component={AddRoom} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
