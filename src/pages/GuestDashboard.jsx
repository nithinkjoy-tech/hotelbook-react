import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import '../../src/css/GuestDashboard.css'
import Profile from '../components/common/Profile';
import History from '../components/common/History';


function GuestDashboard() {
    const data = {
        name : 'vishnu',
        phone:'1234567890',
        email : 'vishnusatheeshpulickal555@gmail.com'
    }
    return (
        <div className="guestDashboard">
            <div className="guestDashboard_menu">
                <ul className="guestDashboard_menuItems">
                    <li><PersonIcon /><div className="Content">Profile</div></li>
                    <li><HistoryIcon /><div className="Content">History</div></li>
                    <li><EventAvailableIcon/><div className="Content">Booked</div></li>
                    <li><ExitToAppIcon/><div className="Content">Logout</div></li>
                </ul>
            </div>
            {/* <Profile title={"Profile"} description={"Basic info, for a faster booking experience"} details={data}/> */}

            <History />
            {/* <div className="guestDashboard_details">
               <DashboardContent />
            </div> */}
        </div>
    )
}

export default GuestDashboard
