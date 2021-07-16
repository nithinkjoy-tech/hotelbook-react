import React, {useEffect,useState,useRef} from "react";
import SearchComponent from "../components/common/SearchComponent";
import {useHistory} from "react-router-dom";
import SearchResultComponent from "../components/searchPageComponent/SearchResultComponent";
// import HotelsComponent from '../components/searchPageComponent/SearchResultComponent';
import ReactPaginate from 'react-paginate';
import "bootstrap/scss/bootstrap.scss";
import { getHotels } from './../api/admin';

function SearchPage() {

  // const [pageNumber,setPageNumber]=useState(1)
  const pagination = useRef();
  console.log(pagination,"pref")

  const history = useHistory();

  const handlePageChange = async({selected}) => {
    let values=history.location.state.values
    values["pageNumber"]=selected
    values["pageSize"]=1
    let {data} = await getHotels(values); 
    let {hotelsCount,hotels}=data

    history.push("/search", {data:hotels, hotelsCount,values}); 
  }; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!history.location.state) window.location = "/";
  let {data,hotelsCount, values} = history.location.state;

  return (
    <div>
      <SearchComponent initialValues={values} />
      <SearchResultComponent hotels={data} />
      <div className="d-flex justify-content-center">
      <ReactPaginate
        ref={pagination}
        pageCount={Math.ceil(hotelsCount / 1)}
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

export default SearchPage;
