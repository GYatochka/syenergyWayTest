import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
class User extends React.Component{
    
    
    render(){
        const users = this.props.data;
        console.log(users);
        const red = ` .red {
            color:red;
        }
        a {
            text-decoration: none;
        }`;
        return(
            <div>
                <Table>
                    <style> {red} </style>
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
                        {users.map(user => 
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.date_joined}</td>
                                <td>{user.groups}</td>
                                <td><a href = "/">Edit</a> | <a href = "/" class = 'red'>Delete</a></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
           
                <Button variant="outline-primary"> Add User</Button>
            </div>
        );
    };
}

export default User;