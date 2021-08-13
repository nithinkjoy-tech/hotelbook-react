import React,{useState} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Lock} from '@material-ui/icons';
import '../../src/css/GuestDashboard.css'
import Profile from '../components/common/Profile';
import History from '../components/common/History';
import Booked_Dashboard from './../components/common/Booked_Dashboard';
import Logout from '../components/common/Logout';
import ChangePassword from './../components/common/ChangePassword';

function GuestDashboard() {
    const [selectOption,setSelectOption] = useState('profile');
    const [activeProfileOption,setActiveProfileOption] = useState(false);
    const [activeHistoryOption,setActiveHistoryOption] = useState(false);
    const [activeBookedOption,setActiveBookedOption] = useState(false);
    return (
        <div className="guestDashboard">
            <div className="guestDashboard_menu">
                <ul className="guestDashboard_menuItems">
                    <li onClick={e => {setSelectOption('profile'); }} className={activeProfileOption && "active"}><PersonIcon /><div className="Content">Profile</div></li>
                    <li onClick={e => {setSelectOption('history'); }} className={activeHistoryOption && "active"}><HistoryIcon /><div className="Content">History</div></li>
                    <li onClick={e => setSelectOption('booked')}><EventAvailableIcon/><div className="Content">Booked</div></li>
                    <li onClick={e => setSelectOption('password')}><Lock/><div className="Content">Password</div></li>
                    <li onClick={e => setSelectOption('logout')}><ExitToAppIcon/><div className="Content">Logout</div></li>
                </ul>
            </div>
           
            {(() => { if (selectOption === 'profile') return (<Profile title={"Profile"} description={"Basic info, for a faster booking experience"}/>)
             else if (selectOption === 'history') return (<History />)
             else if (selectOption === 'booked') return (<Booked_Dashboard />)
             else if (selectOption === 'password') return (<ChangePassword title="Change Password" />)
             else if(selectOption === 'logout') return (<Logout />)
             })()}

            {/* <div className="guestDashboard_details">
               <DashboardContent />
            </div> */}
        </div>
    )
}

export default GuestDashboard
