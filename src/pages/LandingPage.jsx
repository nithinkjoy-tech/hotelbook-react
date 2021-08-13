import React from 'react'
import SearchComponent from '../components/common/SearchComponent'
import Carousel from '../components/common/Carousel';
import Places from '../components/landingPageComponent/Places';
import SearchResultComponent from '../components/searchPageComponent/SearchResultComponent';


function LandingPage() {
    return (
        <div> 
            <Carousel/> 
            <SearchComponent initialValues={null} />
            <Places />
        </div> 
    )
}

export default LandingPage;
