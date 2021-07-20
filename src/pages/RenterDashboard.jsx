import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "./../components/searchPageComponent/SearchResultComponent";
import { getRenterHotels } from './../api/renter';
import '../../src/css/RenterDashboard.css'

import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RenterProfile from '../components/common/RenterProfile';

function RenterDashboard() {
  const [hotels,setHotels]=useState()
  const [isLoading,setIsLoading]=useState(true);
  const [selectOption,setSelectOption] = useState('profile');

  async function getHotels() {
    const {data}=await getRenterHotels()
    setHotels(data)
    setIsLoading(false)
  }

  useEffect(() => {
    getHotels()
  },[]);

   // Dummy data for pass the profile component
   const data = {
    name : 'vishnu',
    phone:'1234567890',
    email : 'vishnusatheeshpulickal555@gmail.com'
}

  if(isLoading){
    return (
      <center>
          <ReactLoading
            type={"bars"}
            color={"#F39636"}
            height={"10%"}
            width={"50%"}
          />
        </center>
    )
  }

  return (
    <div className="renterDashboard">
      <div className="guestDashboard_menu">
                <ul className="guestDashboard_menuItems">
                    <li onClick={e => {setSelectOption('profile'); }}><PersonIcon /><div className="Content">Profile</div></li>
                    <li onClick={e => {setSelectOption('hotels'); }}><HotelIcon /><div className="Content">Hotels</div></li>
                    <li onClick={e => setSelectOption('booked')}><EventAvailableIcon/><div className="Content">Booked</div></li>
                    <li><ExitToAppIcon/><div className="Content">Logout</div></li>
                </ul>
            </div>
            <RenterProfile title={"Profile"} description={"Basic info, for a faster booking experience"} details={data}/>
      {/* <SearchResultComponent user="renter" hotels={hotels} /> */}
    </div> 
  );
}

export default RenterDashboard;
