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
import ReceptionProfile from './../components/common/ReceptionProfile';

function ReceptionDashboard({match}) {
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
           
            {(() => { if (selectOption === 'profile') return (<ReceptionProfile receptionId={match.params.receptionId} title={"Reception Profile"} description={"Basic info about reception account"}/>)
             else if (selectOption === 'password') return (<ChangePassword receptionId={match.params.receptionId} title="Change Password" />)
             })()}

            {/* <div className="guestDashboard_details">
               <DashboardContent />
            </div> */}
        </div>
    )
}

export default ReceptionDashboard
