import "./App.css";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/common/NavBar.jsx";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";
import Footer from "./components/common/Footer";
import Step1 from './components/listPropertyPageComponent/Step1';
import ListPropertyPage from './pages/ListPropertyPage';
import {ToastContainer} from "react-toastify";
import ListPropertyWelcomePage from './pages/ListPropertyWelcomePage';
import GuestDashboard from "./pages/GuestDashboard";
import RenterDashboard from './pages/RenterDashboard';
import RoomDetails from './pages/RoomDetails';

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
        <Route path="/hotel/roomdetails" component={RoomDetails} />
        <Route path="/renter/welcome" component={ListPropertyWelcomePage} />
        <Route path="/renter/dashboard" component={RenterDashboard} />
        <Route path="/renter/signin" component={SigninPage} />
        <Route path="/renter/signup" component={SignupPage} />
        <Route path="/renter/listproperty/:id" component={ListPropertyPage} />
        <Route path="/renter/listproperty" component={ListPropertyPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
