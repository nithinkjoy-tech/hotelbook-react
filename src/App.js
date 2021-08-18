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
import AdminDashboard from './pages/AdminDashboard';
import HotelDetails from './pages/HotelDetails';
import AddRoom from './components/listPropertyPageComponent/AddRoom';
import RoomCard from './pages/RoomCard';
import RenterRoute from './components/common/RenterRoute';
import RoomDescription from './components/RoomDetailsPageComponents/RoomDescription';
import RoomDetails from './pages/RoomDetails';
import BookedRoomDetails from './components/RoomDetailsPageComponents/BookedRoomDetails';
import AdminBook from './components/common/AdminBook';
import Dashboard from './components/receptionistArea/Dashboard';
import OverView from './components/receptionistArea/OverView';
import ArrivalList from './components/receptionistArea/ArrivalList';
import Sidebar from './components/receptionistArea/Sidebar';
import ReceptionDashboard from './pages/ReceptionDashboard';

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
        <Route path="/bookedroomdetails" component={BookedRoomDetails} />
        <Route path="/hoteldetails/:hotelId" component={HotelDetails} />
        <Route path="/hotel/roomdetails/:roomId" component={RoomDetails} />
        <Route path="/renter/welcome" component={ListPropertyWelcomePage} />
        {/* <Route path="/reception/dashboard/arrivals" component={ArrivalList} /> */}
        <Route path="/reception/dashboard" component={Sidebar} />
        <Route path="/reception/signin" component={SigninPage} />
        <Route path="/renter/signup" component={SignupPage} />
        <Route path="/renter/prof" component={AdminBook} />
        {/* <Route exact path="reception/dashboard/book" component={CheckIn}/> 
         <Route exact path="/arrivalslist" component={ArrivalList} />
     <Route exact path="/" component={OverView} /> */}
        {/* <RenterRoute path="/renter/dashboard" component={RenterDashboard} /> */}
        {/* <RenterRoute path="/renter/room/:hotelId" component={RoomCard} />
        <RenterRoute path="/renter/listproperty/:id" component={ListPropertyPage} />
        <RenterRoute path="/renter/listproperty" component={ListPropertyPage} />
        <RenterRoute path="/renter/addroom/:hotelId" component={AddRoom} />
        <RenterRoute path="/renter/editroom/:roomId" component={AddRoom} /> */}
        <Route path="/admin/reception/signup/:hotelId" component={SignupPage} />
        <Route path="/admin/reception/account/:receptionId" component={ReceptionDashboard} />
        <Route path="/admin/signin" component={SigninPage} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/room/:hotelId" component={RoomCard} />
        <Route path="/admin/addHotel/:id" component={ListPropertyPage} />
        <Route path="/admin/addHotel" component={ListPropertyPage} />
        <Route path="/admin/addroom/:hotelId" component={AddRoom} />
        <Route path="/admin/editroom/:roomId" component={AddRoom} />
        <Route path="/" component={LandingPage} />
      </Switch>
      {window.location.pathname.includes("/reception/dashboard")?null:<Footer/>}
    </React.Fragment>
  );
}

export default App;
