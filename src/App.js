import "./App.css";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import SearchPage from "./pages/SearchPage";
import NavBar from "./components/common/NavBar.jsx";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/common/Footer";
import ListPropertyPage from "./pages/ListPropertyPage";
import {ToastContainer} from "react-toastify";
// import ListPropertyWelcomePage from "./pages/ListPropertyWelcomePage";
import GuestDashboard from "./pages/GuestDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import HotelDetails from "./pages/HotelDetails";
import AddRoom from "./components/listPropertyPageComponent/AddRoom";
import RoomCard from "./pages/RoomCard";
import ReceptionRoute from "./components/common/ReceptionRoute";
import RestaurantRoute from "./components/common/RestaurantRoute";
import AdminRoute from "./components/common/AdminRoute";
import GuestRoute from "./components/common/GuestRoute";
// import RoomDescription from "./components/RoomDetailsPageComponents/RoomDescription";
import RoomDetails from "./pages/RoomDetails";
import BookedRoomDetails from "./components/RoomDetailsPageComponents/BookedRoomDetails";
// import AdminBook from "./components/common/AdminBook";
// import Dashboard from "./components/receptionistArea/Dashboard";
// import OverView from "./components/receptionistArea/OverView";
import ArrivalList from "./components/receptionistArea/ArrivalList";
import Sidebar from "./components/receptionistArea/Sidebar";
import ReceptionDashboard from "./pages/ReceptionDashboard";
import RestaurantDashboard from "./pages/RestaurantDashboard";
import AboutPage from "./pages/AboutPage";
import BookedCheckIn from "./components/receptionistArea/BookedCheckIn";
import CheckOut from "./components/receptionistArea/CheckOut";
import RestaurantSidebar from "./components/restaurantArea/RestaurantSidebar";
import AddFoodItem from "./components/restaurantArea/AddFoodItem.jsx";
import AddItemsToBill from "./components/restaurantArea/AddItemsToBill";
import HotelSidebar from "./pages/HotelSidebar";
import AddRoomBoy from './pages/AddRoomBoy';
import ForgotPassword from './components/common/ForgotPassword';
import ResetPassword from './components/common/ResetPassword';
import LinkReview from './components/common/LinkReview';
import NotFound from './components/common/NotFound';
import Logout from './components/common/Logout';

function App() {
  return (
    <React.Fragment>
      <ToastContainer position="top-center" autoClose={5000000} />
      <NavBar />

      <Switch>
        <Route exact path="/about" component={AboutPage} />
        {/* <Route exact path="/search" component={SearchPage} /> */}
        <Route exact path="/signin" component={SigninPage} />
        <GuestRoute exact path="/dashboard" component={GuestDashboard} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/logout" component={Logout} />
        <GuestRoute exact path="/bookedroomdetails" component={BookedRoomDetails} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/admin/forgotpassword" component={ForgotPassword} />
        <Route exact path="/resetpassword/:token" component={ResetPassword} />
        <Route exact path="/hoteldetails/:hotelId" component={HotelDetails} />
        <Route exact path="/linkreview/:id" component={LinkReview} />
        <Route exact path="/hotel/roomdetails/:roomId" component={RoomDetails} />
        <ReceptionRoute exact path="/reception/dashboard/checkin/:bookingId" component={BookedCheckIn} />
        <ReceptionRoute exact path="/reception/dashboard/checkout/:bookingId" component={CheckOut} />
        <ReceptionRoute exact path="/reception/dashboard" component={Sidebar} />
        <Route exact path="/reception/signin" component={SigninPage} />

        <RestaurantRoute exact path="/restaurant/dashboard" component={RestaurantSidebar} />
        <Route exact path="/restaurant/signin" component={SigninPage} />
        <RestaurantRoute exact path="/restaurant/addfooditem" component={AddFoodItem} />
        <RestaurantRoute exact path="/restaurant/additemstobill/:bookingId" component={AddItemsToBill} />
        <AdminRoute exact path="/admin/reception/signup/:hotelId" component={SignupPage} />
        <AdminRoute exact path="/admin/reception/account/:receptionId" component={ReceptionDashboard} />
        <AdminRoute exact path="/admin/restaurant/signup/:hotelId" component={SignupPage} />
        <AdminRoute
          exact
          path="/admin/restaurant/account/:restaurantId"
          component={RestaurantDashboard}
        />
        <Route exact path="/admin/signin" component={SigninPage} />
        <Route exact path="/admin/signup" component={SignupPage} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        <AdminRoute exact path="/admin/room/:hotelId" component={RoomCard} />
        <AdminRoute exact path="/admin/addHotel/:id" component={ListPropertyPage} />
        <AdminRoute exact path="/admin/addHotel" component={ListPropertyPage} />
        <AdminRoute exact path="/admin/manageHotel/roomBoy/:roomBoyId" component={AddRoomBoy} />
        <AdminRoute exact path="/admin/manageHotel/:hotelId" component={HotelSidebar} />
        <AdminRoute exact path="/admin/addroom/:hotelId" component={AddRoom} />
        <AdminRoute exact path="/admin/editroom/:roomId" component={AddRoom} />
        <Route exact path="/" component={LandingPage} />
        <Route component={NotFound} />
      </Switch>
      {window.location.pathname.includes("/reception/dashboard") ||
      window.location.pathname.includes("/restaurant/dashboard") ||
      window.location.pathname.includes("/restaurant/additemstobill") ||
      window.location.pathname.includes("/admin/manageHotel") ? null : (
        <Footer />
      )}
    </React.Fragment>
  );
}

export default App;
