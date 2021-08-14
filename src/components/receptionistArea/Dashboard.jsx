import React from 'react'
import Sidebar from './Sidebar'
// import OverView from './OverView'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
// import CheckIn from './CheckIn';
// import ArrivalList from './ArrivalList';
import '../../css/Dashboard.css';

function Dashboard() {
    return (
      <div className="dashboard">
        <div className="dashboard-sidebar">
    <Sidebar />
    </div>
    <div className="dashboard-items">
    <Router>
    {/* <Switch>
     <Route exact path="/book" component={CheckIn}/>
     <Route exact path="/" component={OverView} />
     <Route exact path="/arrivalslist" component={ArrivalList} />
    </Switch> */}
    </Router>
    </div>
   </div>
    )
}

export default Dashboard
