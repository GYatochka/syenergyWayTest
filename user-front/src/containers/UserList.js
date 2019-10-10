import React from 'react';
import User from '../components/User';

class UserList extends React.Component{

    state = {
        users: [],
    }
    render(){
        return(
            <User data = {this.state.users} />
        );
    };
}

export default UserList;