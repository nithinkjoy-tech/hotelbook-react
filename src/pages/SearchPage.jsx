import React from 'react'
import SearchComponent from '../components/common/SearchComponent'
import {useHistory} from "react-router-dom";
import HotelsComponent from './../components/searchPageComponent/HotelsComponent';

function SearchPage() {
    const history=useHistory()
    if(!history.location.state) window.location="/"

    const {data,values}=history.location.state

    return (
        <div> 
            <SearchComponent initialValues={values} />
            <HotelsComponent hotels={data} />
        </div>
    )
}

export default SearchPage
