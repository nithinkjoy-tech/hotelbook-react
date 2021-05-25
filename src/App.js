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

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/renter/signin" component={SigninPage} />
        <Route path="/renter/signup" component={SignupPage} />
        <Route path="/renter/listproperty" component={Step1} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
