import React from "react";
import Meeting from "../Greeting/Greeting";


class MeetingDashboard extends React.Component {
    render() {
        return(
           <>
                <Meeting name= 'Sam'/>
                <Meeting name= 'Lim'/>
                <Meeting name= 'Cat'/>
                <Meeting name= 'Lina'/>
                <Meeting name= 'Dina'/>
            </> 
        )
        
    }
}

export default MeetingDashboard;