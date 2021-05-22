import "./App.css";
import React from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage";
import NavBar from "./components/common/NavBar.jsx";
import Rooms from './components/landingPageComponent/rooms'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
      <Rooms />
    </React.Fragment>
  );
}

export default App;
