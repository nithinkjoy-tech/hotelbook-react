import { ImportContactsTwoTone } from '@material-ui/icons';
import React from 'react';
import PriceSection from '../components/RoomDetailsPageComponents/PriceSection';
import Amenities from './../components/RoomDetailsPageComponents/Amenities';


const RoomDetails = () => {
    return ( 
        <React.Fragment>
            <PriceSection />
            <Amenities />
        </React.Fragment>
     );
}
 
export default RoomDetails;