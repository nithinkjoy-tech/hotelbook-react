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
import RestaurantProfile from './../components/common/RestaurantProfile';

function RestaurantDashboard({match}) {
    const [selectOption,setSelectOption] = useState('profile');
    const [activeProfileOption,setActiveProfileOption] = useState(false);
    return (
        <div className="guestDashboard">
            <div className="guestDashboard_menu">
                <ul className="guestDashboard_menuItems">
                    <li onClick={e => {setSelectOption('profile'); }} className={activeProfileOption && "active"}><PersonIcon /><div className="Content">Profile</div></li>
                    <li onClick={e => setSelectOption('password')}><Lock/><div className="Content">Password</div></li>
                </ul>
            </div>
           
            {(() => { if (selectOption === 'profile') return (<RestaurantProfile restaurantId={match.params.restaurantId} title={"Restaurant Profile"} description={"Basic info about restaurant account"}/>)
             else if (selectOption === 'password') return (<ChangePassword restaurantId={match.params.restaurantId} receptionId={null} title="Change Password" />)
             })()}

            {/* <div className="guestDashboard_details">
               <DashboardContent />
            </div> */}
        </div>
    )
}

export default RestaurantDashboard
