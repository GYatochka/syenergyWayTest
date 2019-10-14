import React from 'react';
import axios from "axios";
import User from '../components/User';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class UserList extends React.Component{

    state = {
        users: [],
        groups: [],
    }

    async componentDidMount(){
        await axios.get('http://127.0.0.1:8000/groups/')
        .then(res =>{
            
            this.setState({
                groups : res.data,
            })
        })
        axios.get('http://127.0.0.1:8000/users/')
        .then(res =>{
            this.setState({
                users : res.data,
            })
        });
        ;
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
                        <User data = {user} groups = {this.state.groups} />
                    )}
                    </tbody>
                </Table>
           
                <Button variant="outline-primary"><Link to='/create-user/post/'> Add User</Link></Button>
            </div>
        );
    };
}

export default UserList;