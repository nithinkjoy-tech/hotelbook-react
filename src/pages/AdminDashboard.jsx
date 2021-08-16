import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "../components/searchPageComponent/SearchResultComponent";
import { getAdminHotels } from '../api/admin';
import Logout from '../components/common/Logout'
import '../../src/css/RenterDashboard.css'
import ReactPaginate from 'react-paginate';
import PersonIcon from '@material-ui/icons/Person';
import HistoryIcon from '@material-ui/icons/History';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import {Lock} from '@material-ui/icons';
import {HotelRounded} from '@material-ui/icons';
import '../../src/css/GuestDashboard.css'
// import AdminHistory from '../components/common/AdminHistory';
import Booked_Dashboard from '../components/common/Booked_Dashboard'; 
import ChangePassword from '../components/common/ChangePassword';
import HotelIcon from '@material-ui/icons/Hotel';
import AdminProfile from '../components/common/AdminProfile';
import AdminBook from '../components/common/AdminBook';
// import AdminHotelsSection from '../components/common/AdminHistory';
import AdminHotels from './../components/common/AdminHotels';
import {Link} from "react-router-dom"

function AdminDashboard() {
  const [selectOption,setSelectOption] = useState('profile');
    const [activeProfileOption,setActiveProfileOption] = useState(false);
    const [activeHistoryOption,setActiveHistoryOption] = useState(false);
    const [activeBookedOption,setActiveBookedOption] = useState(false);
    return (
        <div className="guestDashboard">
            <div className="guestDashboard_menu">
            <Link className="btn btn-primary ml-12" to={"/admin/addHotel"}>+ Add Hotel</Link>
                <ul className="guestDashboard_menuItems">
                    <li onClick={e => {setSelectOption('profile'); }} className={activeProfileOption && "active"}><PersonIcon /><div className="Content">Profile</div></li>
                    {/* <li onClick={e => {setSelectOption('history'); }} className={activeHistoryOption && "active"}><HistoryIcon /><div className="Content">History</div></li> */}
                    {/* <li onClick={e => setSelectOption('booked')}><EventAvailableIcon/><div className="Content">Booked</div></li> */}
                    <li onClick={e => setSelectOption('hotels')}><HotelRounded/><div className="Content">Hotels</div></li>
                    <li onClick={e => setSelectOption('password')}><Lock/><div className="Content">Password</div></li>
                    <li onClick={e => setSelectOption('logout')}><ExitToAppIcon/><div className="Content">Logout</div></li>
                </ul>
            </div>
         
            {(() => { if (selectOption === 'profile') return (<AdminProfile title={"Profile"} description={"Basic info, for a faster booking experience"}/>)
            //  else if (selectOption === 'history') return (<AdminHistory />)
            //  else if (selectOption === 'booked') return (<AdminBook />)
             else if (selectOption === 'hotels') return (<AdminHotels />)
             else if (selectOption === 'password') return (<ChangePassword title="Change Password" />)
             else if(selectOption === 'logout') return (<Logout />)
             })()}

            {/* <div className="guestDashboard_details">
               <DashboardContent />
            </div> */}
        </div>
    )
}

export default AdminDashboard;
