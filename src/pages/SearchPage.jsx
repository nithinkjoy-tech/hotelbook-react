import React,{useEffect} from 'react'
import SearchComponent from '../components/common/SearchComponent'
import {useHistory} from "react-router-dom";
import SearchResultComponent from '../components/searchPageComponent/SearchResultComponent';
// import HotelsComponent from '../components/searchPageComponent/SearchResultComponent';

function SearchPage() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const history=useHistory()
    if(!history.location.state) window.location="/"

    const {data,values}=history.location.state

    return (
        <div> 
            <SearchComponent initialValues={values} />
            <SearchResultComponent hotels={data} />
        </div>
    )
}

// Data model to pass in the searchResultComponent 
// const data=[
// {id:"1",name:'hotel abc',rent:'1200',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3, roomSize:15},
// {id:"2",name:'Hotel def',rent:'1500',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:3.5,roomSize:20},
// {id:"3",name:'Hotel ghi',rent:'1000',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4,roomSize:25},
// {id:"4",name:'Hotel jkl',rent:'1300',guests:'2',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:4.5,roomSize:10},
// {id:"5",name:'Hotel mno',rent:'1100',guests:'3',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:5,roomSize:35},
// {id:"6",name:'Hotel pqr',rent:'900',guests:'1',description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A recusandae, illum sequi numquam tempora voluptates?',rating:2.5,roomSize:12}
// ]

export default SearchPage
