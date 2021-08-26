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
import "../../css/Sidebar.css";
import ArrivalList from './ArrivalList';
import OverView from './OverView';
import BookNow from './BookNow';
import UpcomingArrivalList from './UpcomingArrivalList';
import CurrentlyStaying from './CurrentlyStaying';
import CompletedStays from './CompletedStays';
import CheckOut from './CheckOut';


const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let [choice,setChoice]=useState()

  return (
    <React.Fragment>

    <div className="dashboard-sidebar" style={{marginTop:"68px"}}>
      <Router>
        <div id="header">
              
          <ProSidebar width="245px" collapsed={menuCollapse}>
            <SidebarHeader>
              {/* <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div> */}
            </SidebarHeader>
            <SidebarContent>
              <Menu className="menu" iconShape="square">
                <MenuItem icon={<FiHome />}>
                 {/* <Link to={'/reception/dashboard'} > Over View</Link> */}
                 <a onClick={()=>setChoice("overview")}>Overviw</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("booknow")}>Book Now</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("arrivalList")}>Todays Arrivals</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("upcomingArrivalList")}>Upcoming Arrivals</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  <a onClick={()=>setChoice("currentlyStaying")}>Currently Staying</a>
                </MenuItem>
                <MenuItem icon={<FaList />}>
                <a onClick={()=>setChoice("completedStays")}>Completed Stays</a>
                </MenuItem> 
                {/*  */}
                <MenuItem icon={<FaList />}>
                <a onClick={()=>setChoice("checkout")}>Checkout</a>
                </MenuItem>
                {/*  */}

                <MenuItem icon={<BiCog />}>etc</MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </Router>
    </div> 
    {choice==="overview"?<OverView/>:""}
    {choice==="booknow"?<BookNow/>:""}
    {choice==="arrivalList"?<ArrivalList/>:""}
    {choice==="upcomingArrivalList"?<UpcomingArrivalList/>:""}
    {choice==="currentlyStaying"?<CurrentlyStaying/>:""}
    {choice==="completedStays"?<CompletedStays/>:""}
    {choice==="checkout"?<CheckOut/>:""}
    </React.Fragment>
  );
};

export default Sidebar;
