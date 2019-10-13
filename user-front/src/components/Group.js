import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class Group extends React.Component{

    onDelete = (e,groupId)=>{
        axios.delete(`http://127.0.0.1:8000/groups/${groupId}`)
        .then(console.log("Successfully deleted!"))
        .then(this.forceUpdate());
    }
    
    render(){
        const group = this.props.data;
        const red = ` .red {
            color:red;
        };
        .right{
            float:right;
        }
        `;
        return(


                        <tr>
                            <style> {red} </style>
                            <td>{group.id}</td>
                            <td>{group.name}</td>
                            <td>{group.description}</td>
                            <td><Button variant="outline-primary" ><Link to={`/create-group/put/${group.id}`} >Edit</Link></Button> <Button  variant="outline-danger" onClick = {e => this.onDelete(e, group.id)} class = 'red'>Delete</Button></td>
                        </tr>
                    
        );
    };
}

export default Group;