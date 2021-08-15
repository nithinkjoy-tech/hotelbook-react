import React from 'react'
import Sidebar from './Sidebar'
import OverView from './OverView'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import CheckIn from './CheckIn';
import ArrivalList from './ArrivalList';
import '../../css/Dashboard.css';

function Dashboard() {
  console.log(window.location)

    return (
      <div className="dashboard">
        
    <Sidebar />
    <div className="dashboard-items">
      
    <Router>
    <Switch>
     <Route exact path="/reception/dashboard/book" component={CheckIn}/>
     <Route exact path="/reception/dashboard/arrivalslist" component={ArrivalList} />
     <Route exact path="/reception/dashboard" component={OverView} />
    </Switch>
    </Router>
    </div>
   </div>
    )
}

export default Dashboard
