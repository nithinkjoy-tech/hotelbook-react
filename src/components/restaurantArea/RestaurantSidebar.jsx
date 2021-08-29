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
import RestaurantCurrentlyStaying from './RestaurantCurrentlyStaying';


const RestaurantSidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  let [choice,setChoice]=useState("addBill")

  return (
    <React.Fragment>

    <div className="dashboard-sidebar" style={{marginTop:"68px"}}>
      <Router>
        <div id="header">
              
          <ProSidebar width="245px" collapsed={menuCollapse}>
            <SidebarHeader>
            </SidebarHeader>
            <SidebarContent>
              <Menu className="menu" iconShape="square">                
                <MenuItem style={{backgroundColor:"#FED00B",borderRadius:"8px"}} icon={<FaList />}>
                  <a onClick={()=>setChoice("addBill")}>Add Bill</a>
                </MenuItem>
              </Menu>
            </SidebarContent>
          </ProSidebar>
        </div>
      </Router>
    </div> 
    {choice==="addBill"?<RestaurantCurrentlyStaying/>:""}
    </React.Fragment>
  );
};

export default RestaurantSidebar;
