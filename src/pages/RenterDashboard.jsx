import React, {useEffect,useState} from "react";
import ReactLoading from 'react-loading'
import SearchResultComponent from "./../components/searchPageComponent/SearchResultComponent";
import { getRenterHotels } from './../api/renter';
import ReactPaginate from 'react-paginate';

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

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[didPaginate])

  const handlePageChange = async({selected}) => {
    let values={pageNumber:selected,pageSize}
    let {data} = await getRenterHotels(values); 
    let {hotelsCount,hotels}=data
    setHotels(hotels)
    setHotelsCount(hotelsCount)
    setIsLoading(false)
    didPaginate===true?setDidPaginate("Yes"):setDidPaginate(true)
  }; 

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
      <div className="d-flex justify-content-center">
      <ReactPaginate
        // ref={pagination}
        pageCount={Math.ceil(hotelsCount / pageSize)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        previousLabel="Previous"
        nextLabel="Next"
      />
      </div>
    </div> 
  );
}

export default RenterDashboard;
