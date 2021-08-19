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

import { FaList, FaRegHeart } from "react-icons/fa";
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
              
          <ProSidebar collapsed={menuCollapse}>
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
                  <a onClick={()=>setChoice("booking")}>Todays Arrivals</a>
                </MenuItem>
                <MenuItem icon={<FaRegHeart />}>
                  <a><Link to={'/reception/dashboard'} >History</Link></a>
                </MenuItem>
                <MenuItem icon={<RiPencilLine />}>etc</MenuItem>
                <MenuItem icon={<BiCog />}>etc</MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu>
                <MenuItem>&copy;Adithya group</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </Router>
    </div> 
    {choice==="overview"?<OverView/>:""}
    {choice==="booknow"?<BookNow/>:""}
    {choice==="booking"?<ArrivalList/>:""}
    </React.Fragment>
  );
};

export default Sidebar;
