import React,{useState, useEffect} from 'react';
import ReactLoading from 'react-loading'
import SearchResultComponent from "../searchPageComponent/SearchResultComponent";
import { getAdminHotels } from '../../api/admin';

function AdminHotels() {
    const [hotels,setHotels]=useState()
  const [isLoading,setIsLoading]=useState(true)
  const [hotelsCount,setHotelsCount]=useState()
  const [didPaginate,setDidPaginate]=useState()

  let pageSize=9

  async function getHotels() {
    let values={pageNumber:0,pageSize}
    const {data}=await getAdminHotels(values)
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
      <SearchResultComponent user="admin" hotels={hotels} />
    </div> 
  );
}

export default AdminHotels
