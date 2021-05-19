import React from 'react'
import SearchComponent from '../components/landingPageComponent/SearchComponent'
import Carousel from '../components/common/Carousel';
import NavBar from './../components/common/NavBar';

function LandingPage() {
    return (
        <div> 
            <NavBar/>
            <Carousel/> 
            <SearchComponent/>
        </div>
    )
}

export default LandingPage
