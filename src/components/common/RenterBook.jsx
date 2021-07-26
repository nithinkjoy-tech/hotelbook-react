import React from 'react';
import '../../css/RenterBook.css'

function RenterBook() {
    return (
        <div className="renterBook">
            <h3>Book Details</h3>
            <h5>Caption about Book Details</h5>
         <div className="renterBook_contents">
             <div className="renterBook_Contents_Left">
             <p>Hotel Name</p>
             <p>Type</p>
             </div>
             <div className="renterBook_Content_Right">
             <p>DD/MM/YY</p>
             <p>Price</p>
             </div>
         </div>

         <div className="renterBook_contents">
             <div className="renterBook_Contents_Left">
             <p>Hotel Name</p>
             <p>Type</p>
             </div>
             <div className="renterBook_Content_Right">
             <p>DD/MM/YY</p>
             <p>Price</p>
             </div>
         </div>

         <div className="renterBook_contents">
             <div className="renterBook_Contents_Left">
             <p>Hotel Name</p>
             <p>Type</p>
             </div>
             <div className="renterBook_Content_Right">
             <p>DD/MM/YY</p>
             <p>Price</p>
             </div>
         </div>
           
        </div>
    )
}

export default RenterBook