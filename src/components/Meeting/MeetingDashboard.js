import React from "react";
import Meeting from "../Greeting/Greeting";


class MeetingDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            userArray: [
                {
                    id: 1,
                     firstName: 'Tony',
                     lastName: 'Stark'
                },
                {
                    id: 2,
                     firstName: 'Jek',
                     lastName: 'Vorobey'
                 },
                 {
                    id: 3,
                     firstName: 'Mark',
                     lastName: 'Twen'
                 },
                 {
                    id: 4,
                     firstName: 'Criss',
                     lastName: 'Molly'
                 },
                 {
                    id: 5,
                     firstName: 'Donaten',
                     lastName: 'Marvel'
                 },
             ]
        }
    }

    sortUsers() {
        const {userArray} = this.state;
        const newArray = [...userArray];
        newArray.sort((a, b) => a.firstName > b.firstName? 1 : -1);
        this.setState({
            userArray: newArray
        })
    }

    userToMeeting() {
        const {userArray} = this.state;
        return userArray.map((user) => <Meeting key={user.id} name={user.firstName} lastName={user.lastName}/>)
    }
    render() {
        return(
           <>
           <button onClick= {() => {this.sortUsers()}}>Sort!</button>
           {this.userToMeeting()}
           </> 
        )
        
    }
}

export default MeetingDashboard;