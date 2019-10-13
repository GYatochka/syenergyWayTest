import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class User extends React.Component{
    
    state = {
        groups: [],
    }

    onDelete = (e,userId)=>{
        axios.delete(`http://127.0.0.1:8000/users/${userId}`)
        .then(console.log("Successfully deleted!"));
        this.forceUpdate();
        
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/groups/')
        .then(res =>{
            this.setState({
                groups : res.data,
            })
        })
    }
    
    render(){
        const user = this.props.data;
        console.log(user);
        const red = ` .red {
            color:red;
        }
        a {
            text-decoration: none;
        }`;
        return(       
                <tr>
                    <style> {red} </style>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.date_joined}</td>
                    <td>{user.groups}</td>
                    <td> <Button variant="outline-primary" ><Link to={`/create-user/put/${user.id}`} >Edit</Link></Button> <Button  variant="outline-danger" onClick = {e => this.onDelete(e, user.id)} class = 'red'>Delete</Button></td>
                </tr>
                        
               
        );
    };
}

export default User;