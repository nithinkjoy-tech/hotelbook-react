import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "./../components/searchPageComponent/SearchResultComponent";
import { getRenterHotels } from './../api/renter';
import Logout from '../components/common/Logout'
import '../../src/css/RenterDashboard.css'
import ReactPaginate from 'react-paginate';

import PersonIcon from '@material-ui/icons/Person';
import HotelIcon from '@material-ui/icons/Hotel';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import RenterProfile from '../components/common/RenterProfile';
import RenterBook from '../components/common/RenterBook';
import RenterHotelsSection from './../components/common/RenterHotelsSection';

function RenterDashboard() {
  const [hotels,setHotels]=useState()
  const [isLoading,setIsLoading]=useState(true)
  const [hotelsCount,setHotelsCount]=useState()
  const [didPaginate,setDidPaginate]=useState()

  let pageSize=9

  async function getHotels() {
    let values={pageNumber:0,pageSize}
    const {data}=await getRenterHotels(values)
    let {hotelsCount,hotels}=data
    console.log(hotelsCount,"count")
    setHotels(hotels)
    setHotelsCount(hotelsCount)
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
    <div>
      <SearchResultComponent user="renter" hotels={hotels} />
    </div> 
  );
}

export default RenterDashboard;
