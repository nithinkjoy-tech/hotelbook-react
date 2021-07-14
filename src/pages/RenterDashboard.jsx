import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "./../components/searchPageComponent/SearchResultComponent";
import { getRenterHotels } from './../api/renter';
import '../../src/css/RenterDashboard.css'

import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

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
      {/* <SearchResultComponent user="renter" hotels={hotels} /> */}
    </div> 
  );
}

export default RenterDashboard;
