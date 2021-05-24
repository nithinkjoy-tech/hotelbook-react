import React from 'react'
import SearchComponent from '../components/common/SearchComponent'
import Carousel from '../components/common/Carousel';
import Room from '../components/landingPageComponent/rooms'

function LandingPage() {
    return (
        <div> 
            <Carousel/> 
            <SearchComponent initialValues={null} />
            <Room />
        </div> 
    )
}

export default LandingPage;
