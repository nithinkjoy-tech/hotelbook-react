import "./App.css";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/common/NavBar.jsx";
import SigninPage from './pages/SigninPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/signin" component={SigninPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
