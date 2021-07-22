import React from "react";
import Multiselect from "multiselect-react-dropdown";
import {useHistory} from "react-router-dom";
import {getHotels} from "./../../api/admin";

function FilterComponent({values}) {
  const history = useHistory();

  const handleChange = async options => {
    values["pageNumber"] = 0;
    values["pageSize"] = 9;
    let filterOptionsArray=[]
    options.map(option=>filterOptionsArray.push(option.key))
    values["filterOptions"]=filterOptionsArray
    const {data} = await getHotels(values);
    console.log(data, "dat");
    let {hotelsCount, hotels} = data;
    let forcePage = 0;
    history.push("/search", {data: hotels, hotelsCount, values, forcePage});
  };

  let options = [];

  for(let i=1;i<=5;i++){
    options.push({
      cat: "Star Rating",
      key: `${i} Star`,
    })
  }

  for(let i=4;i>=2;i--){
    options.push({
      cat: "Review Score",
      key: `Above ${i}/5`,
    })
  }

  const loopArray=(array,title)=>{
    for(let item of array){
      options.push({
        cat: title,
        key: item,
      })
    }
  }

  let hotelFacilities = [
    "Free Wifi",
    "Garden",
    "Water park",
    "Spa and wellness centre",
    "Terrace",
    "Fitness centre",
    "Restaurant",
    "Room service",
    "Bar",
    "Hot tub/jacuzzi",
    "Swimming pool",
  ];

  loopArray(hotelFacilities,"Hotel Facilities")

  let roomFacilities=[
    "Air Conditioning",
    "Smart TV",
    "Television"
  ]

  loopArray(roomFacilities,"Room Facilities")

  let otherFacilities=[
    "Parking",
    "Extra Bed",
    "Breakfast",
    "Accomodate Children",
    "Allow Pets",
    "Provide Dormitory for Driver"
  ]

  loopArray(otherFacilities,"Other Facilities")

  return (
    <div style={{backgroundColor: "#F8F9FA"}}>
      <Multiselect
        displayValue="key"
        groupBy="cat"
        onRemove={handleChange}
        onSelect={handleChange}
        closeOnSelect={false}
        showArrow={true}
        showCheckbox={true}
        style={{
          searchBox: {
            width: "83vw",
            margin: "auto",
            border: "2px solid blue",
          },
          multiselectContainer: {
            width: "83vw",
            margin: "auto",
          },
        }}
        placeholder="Select your filter choice"
        options={options}
      />
    </div>
  );
}



export default FilterComponent;
