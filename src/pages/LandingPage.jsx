import React from 'react'
import SearchComponent from '../components/common/SearchComponent'
import Carousel from '../components/common/Carousel';
import Cities from '../components/landingPageComponent/Cities'

function LandingPage() {
    return (
        <div> 
            <Carousel/> 
            <SearchComponent initialValues={null} />
            <Cities />
        </div> 
    )
}

export default LandingPage;
