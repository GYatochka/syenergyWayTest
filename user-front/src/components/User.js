import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button';
class User extends React.Component{
    
    render(){
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>Yato</td>
                            <td>Avatar</td>
                            <td><a href = "/">Edit</a> | <a href = "/" class = 'red'>Delete</a></td>
                        </tr>
                    </tbody>
                </Table>
           
                <Button variant="outline-primary"> Add User</Button>
            </div>
        );
    };
}

export default User;