import React, {useState,useEffect} from "react";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
// import '../../css/GuestDashboard.css'
import ReactLoading from 'react-loading'

import "../../css/Profile.css";
import {displayNotification} from "../../services/notificationService";
import * as Yup from "yup";
import {editRestaurantData,getRestaurant } from "../../api/restaurant";
// import {getRestaurant } from "../../api/renter";

const nameSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Name is required").label("Name"),
});

const usernameSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .matches(/^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/, "Invalid Username")
    .label("Username"),
});

function RestaurantProfile({title, description, name,restaurantId}) {
    console.log(restaurantId);
  const [nameField, setNameField] = useState(false);
  const [usernameField, setUsernameField] = useState(false);
  const [changeName, setChangeName] = useState("");
  const [changeUsername, setChangeUsername] = useState("");
  const [details,setDetails] = useState()
  const [isLoading,setIsLoading]=useState(true)

  const getGuestDetails=async()=>{
    const {data,status}=await getRestaurant({restaurantId})
    console.log(data,"dt")
    if(status!==200) return displayNotification("error","Something error occured")
    setDetails(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getGuestDetails()
  },[])

  const handleNameChange = () => {
    // console.log(changeName);
    nameSchema
      .validate({
        name: changeName,
      })
      .then(async () => {
        console.log("here");
        const {data, status} = await editRestaurantData({name: changeName,restaurantId});
        if (status !== 200)
          return displayNotification("error", data || "Something unexpected happened");
        displayNotification("success", "Name successfully updated");
        console.log(data,"gg")
        setDetails(data)
        setNameField(false)
      })
      .catch(error => {
        displayNotification("error", error.errors.toString());
      });
  };

  const handleUsernameChange = async () => { 
    usernameSchema
      .validate({
        username: changeUsername,
      })
      .then(async () => {
        const {data, status} = await editRestaurantData({username: changeUsername,restaurantId});
        if (status !== 200)
          return displayNotification("error", data?.msg || "Something unexpected happened");
        displayNotification("success", "Username successfully updated");
        setDetails(data)
        setUsernameField(false)
      })
      .catch(error => {
        displayNotification("error", error.errors.toString());
      });
  };

  if(isLoading) 
    return (
      <center>
          <ReactLoading
            type={"bars"}
            color={"#F39636"}
            height={"10%"}
            width={"50%"}
          />
        </center>
    )

  return (
    <div className="guestDashboard_details">
      <h3>{title}</h3>
      <h5>{description}</h5>
      <div className="guestDashboard_details_contents">
        <div className="item">
          <p>
            Name : <span className="contents">{details.name}</span>
          </p>{" "}
          <EditIcon onClick={e => setNameField(nameField?false:true)} className="edit_Icon" />
        </div>
        {nameField && (
          <div className="hidden_Item">
            <input
              type="text"
              className="name_Box"
              placeholder="Enter Name Here"
              onChange={e => setChangeName(e.target.value)}
            />
            <div className="hidden_Item_Button">
              <Button
                variant="contained"
                color="primary"
                size="small"
                onClick={() => handleNameChange()}
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </div>
        )}
        <div className="item">
          <p>
            Username : <span className="contents">{details.username}</span>
          </p>{" "}
          <EditIcon onClick={e => setUsernameField(usernameField?false:true)} className="edit_Icon" />
        </div>
        {usernameField && (
          <div className="hidden_Item">
            <input
              type="text"
              className="name_Box"
              placeholder="Enter new Username Here"
              onChange={e => setChangeUsername(e.target.value)}
            />
            <div className="hidden_Item_Button">
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleUsernameChange()}
                size="small"
                startIcon={<SaveIcon />}
              >
                Save
              </Button>
            </div>
          </div>
        )}
        <div className="item">
          <p>
            Email : <span className="contents">{details.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RestaurantProfile;
