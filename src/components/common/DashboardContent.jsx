import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
// import '../../css/GuestDashboard.css'
import '../../css/DashboardContent.css'

function DashboardContent({title,description,name,details}) {
    return (
        <div className="guestDashboard_details">
            <h3>{title}</h3>
            <h5>{description}</h5>
            <div className="guestDashboard_details_contents">
                    <div className="item">
                    <p>Name : <span className="contents">{details.name}</span></p> <EditIcon className="edit_Icon"/>
                    </div>
                    <div className="item">
                    <p>Phone : <span className="contents">{details.phone}</span></p> <EditIcon className="edit_Icon"/>
                    </div>
                    <div className="item">
                    <p>Email : <span className="contents">{details.email}</span></p>
                    </div>
            </div>
        </div>
    )
}

export default DashboardContent
