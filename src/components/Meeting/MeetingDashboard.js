import React from "react";
import Meeting from "../Greeting/Greeting";

const userArray = [
   {
        firstName: 'Tony',
        lastName: 'Stark'
   },
   {
        firstName: 'Jek',
        lastName: 'Vorobey'
    },
    {
        firstName: 'Mark',
        lastName: 'Twen'
    },
    {
        firstName: 'Criss',
        lastName: 'Molly'
    },
    {
        firstName: 'Donaten',
        lastName: 'Marvel'
    },
]



class MeetingDashboard extends React.Component {
    userToMeeting() {
        return userArray.map((user) => <Meeting name={user.firstName} lastName={user.lastName}/>)
    }
    render() {
        return(
           <>
           {this.userToMeeting()}
           </> 
        )
        
    }
}

export default MeetingDashboard;