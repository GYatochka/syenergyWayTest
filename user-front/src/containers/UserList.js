import React from 'react';
import axios from "axios";
import User from '../components/User';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class UserList extends React.Component{

    state = {
        users: [],
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/users/')
        .then(res =>{
            this.setState({
                users : res.data,
            })
        })
    }

    render(){
        return(
            <div>
                <Table>                  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Created</th>
                            <th>Groups</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody> 
                    {this.state.users.map(user => 
                        <User data = {user} />
                    )}
                    </tbody>
                </Table>
           
                <Button variant="outline-primary"><Link to='/create-user'> Add User</Link></Button>
            </div>
        );
    };
}

export default UserList;