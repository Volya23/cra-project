import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: []
        }
    }

    componentDidMount() {
        getUsers().then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }

    renderUsers = ()  => {
        const {users, filteredUsers} = this.state;
        return filteredUsers.length > 0
        ?
        filteredUsers.map((user) => <UserCard user={user} key={user.login.uuid} />)
        :
        users.map((user) => <UserCard user={user} key={user.login.uuid} />)
    }

    handlerSearch = ({target: {value}}) => {
        const {users} = this.state;
        
        const searchValue = value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1)
        
        this.setState({
            filteredUsers
        })
    }
        

    

    render() {
        const {users} = this.state;
        return(
            <>
                <h1>User List</h1>

                <label>
                    Search by lastname
                    <input type="text" onChange={this.handlerSearch}/>
                </label>

                <section className="card-container">
                    {users.length > 0 ? this.renderUsers() : <h2>Users is loading </h2>}
                </section>
            </>
        )
    }
}

export default UserList;