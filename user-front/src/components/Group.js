import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
class Group extends React.Component{
    render(){
        const red = ` .red {
            color:red;
        };
        .right{
            float:right;
        }
        `;
        return(
            <div>
                <style> {red} </style>
                <Table>    
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>Admin</td>
                            <td>Godness</td>
                            <td><a href = "/">Edit</a> | <a href = "/" class = 'red'>Delete</a></td>
                        </tr>
                    </tbody>
                </Table>
            
                <Button variant="outline-primary" className="pull-right"> Add Group</Button>
           
            </div>
        );
    };
}

export default Group;