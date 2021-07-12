import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "./../components/searchPageComponent/SearchResultComponent";
import { getRenterHotels } from './../api/renter';

function RenterDashboard() {
  const [hotels,setHotels]=useState()
  const [isLoading,setIsLoading]=useState(true)

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
    <div>
      <SearchResultComponent user="renter" hotels={hotels} />
    </div> 
  );
}

export default RenterDashboard;
