import React from 'react'
import SearchComponent from '../components/common/SearchComponent'
import Carousel from '../components/common/Carousel';
import Places from '../components/landingPageComponent/Places'



function LandingPage() {

  // Just for testing purpose  
    const data=[
        {id:"1",name:'hotel abc',rent:'1200',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3, roomSize:15},
        {id:"2",name:'Hotel def',rent:'1500',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3.5,roomSize:20},
        {id:"3",name:'Hotel ghi',rent:'1000',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4,roomSize:25},
        {id:"4",name:'Hotel jkl',rent:'1300',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4.5,roomSize:10},
        {id:"5",name:'Hotel mno',rent:'1100',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:5,roomSize:35},
        {id:"6",name:'Hotel pqr',rent:'900',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:2.5,roomSize:12}
        ]

    return (
        <div> 
            <Carousel/> 
            <SearchComponent initialValues={null} />
            <Places />
        </div> 
    )
}

export default LandingPage;
