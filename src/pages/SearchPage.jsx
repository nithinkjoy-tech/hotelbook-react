import React, {useEffect,useState,useRef} from "react";
import SearchComponent from "../components/common/SearchComponent";
import {useHistory} from "react-router-dom";
import SearchResultComponent from "../components/searchPageComponent/SearchResultComponent";
// import HotelsComponent from '../components/searchPageComponent/SearchResultComponent';
import ReactPaginate from 'react-paginate';
import "bootstrap/scss/bootstrap.scss";
import { getHotels } from './../api/admin';
import FilterComponent from './../components/searchPageComponent/FilterComponent';

function SearchPage() {

  const [didPaginate,setDidPaginate]=useState()
 
  const history = useHistory();
  const pagination = useRef();

  let pageSize=9

  const handlePageChange = async({selected}) => {
    let values=history.location.state.values
    values["pageNumber"]=selected
    values["pageSize"]=pageSize
    let {data} = await getHotels(values); 
    let {hotelsCount,hotels}=data
    didPaginate===true?setDidPaginate("Yes"):setDidPaginate(true)
    history.push("/search", {data:hotels, hotelsCount,values}); 
  }; 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [didPaginate]);


  if (!history.location.state) window.location = "/";
  let {data,hotelsCount, values,forcePage} = history.location.state;
  return (
    <div>
      <SearchComponent initialValues={values} />
      <FilterComponent values={history.location.state.values} />
      <SearchResultComponent hotels={data} />
      <div className="d-flex justify-content-center">
      <ReactPaginate
        ref={pagination}
        pageCount={Math.ceil(hotelsCount / pageSize)}
        pageRangeDisplayed={10}
        marginPagesDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={forcePage}
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
