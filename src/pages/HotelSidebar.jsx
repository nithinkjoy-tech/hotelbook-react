import React, { useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

import { FaList, FaRegHeart,FaAddressCard } from "react-icons/fa";
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";

import "react-pro-sidebar/dist/css/styles.css";
import "../css/Sidebar.css";
// import RestaurantCurrentlyStaying from './RestaurantCurrentlyStaying';
// import AddFoodItem from './AddFoodItem.jsx';
// import AddRoom from './../components/listPropertyPageComponent/AddRoom';
import ManageRoomBoy from './ManageRoomBoy';
import AddRoomBoy from './AddRoomBoy';
import RoomCard from './RoomCard';


const HotelSidebar = ({match}) => {
    const hotelId=match.params.hotelId
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let [choice,setChoice]=useState("manageRooms")

  return (
    <React.Fragment>

    <div className="dashboard-sidebar"  style={{marginTop:"68px"}}>
      <Router>
        <div id="header">
              
          <ProSidebar width="245px" collapsed={menuCollapse}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
              <Menu className="menu" iconShape="square">                
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("manageRooms")}>Manage Rooms</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("addRoomBoy")}>Add RoomBoy</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("manageRoomBoy")}>Manage RoomBoy</a>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </Router>
    </div> 
    {choice==="manageRooms"?<RoomCard hotelId={hotelId} />:""}
    {choice==="addRoomBoy"?<AddRoomBoy hotelId={hotelId} />:""}
    {choice==="manageRoomBoy"?<ManageRoomBoy hotelId={hotelId}/>:""}
    </React.Fragment>
  );
}

export default HotelSidebar;
