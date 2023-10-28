import React from "react";
import { getUsers } from "../../api";
import UserCard from "./UserCard";

class UserList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            filteredUsers: [],
            userCount: 100
        }
    }

    componentDidMount() {
        getUsers(this.state.userCount).then((data) => {
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
        if (value === '') {
            this.setState({
                filteredUsers: []
            })
        }
        
        const {users} = this.state;
        const searchValue = value;
        const filteredUsers = users.filter((user) => user.name.last.toLowerCase().trim().indexOf(searchValue.toLowerCase().trim()) !== -1)
        
        this.setState({
            filteredUsers
        })
    }
    setUserCount = ({target: {value}}) => {
        this.setState({
            userCount: value
        })
    }

    loadUsers = () => {
        getUsers(this.state.userCount).then((data) => {
            const {results} = data;
            this.setState({
                users: results
            })
        });
    }


    render() {
        const {users} = this.state;
        return(
            <>
                <h1>User List</h1>
                
                <label>
                    Type count users
                    <input type="number" min={1} max={100} onChange={this.setUserCount} />
                </label>
                <button onClick={this.loadUsers}>Load</button>


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
