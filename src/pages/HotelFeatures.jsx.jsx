import { ImportContactsTwoTone } from '@material-ui/icons';
import React from 'react';
import PriceSection from '../components/RoomDetailsPageComponents/PriceSection';
// import RoomDescription from '../components/RoomDetailsPageComponents/RoomDescription';
import Amenities from '../components/RoomDetailsPageComponents/Amenities';


const HotelFeatures = () => {
    return ( 
        <React.Fragment>
            <PriceSection />
            {/* <RoomDescription description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum, dolor volutpat malesuada vulputate, diam libero tristique augue, et euismod dolor eros vitae ligula. Praesent cursus mi non nibh convallis, eget pharetra velit ornare. Fusce vel malesuada ex. Proin vitae leo rhoncus, dictum nulla molestie, condimentum libero. Etiam id mollis ipsum. Quisque tincidunt sagittis nisl, suscipit ullamcorper dolor ullamcorper eget. Cras non tortor id erat tempus interdum.'}/> */}
            <Amenities />
        </React.Fragment>
     );
}
 
export default HotelFeatures;