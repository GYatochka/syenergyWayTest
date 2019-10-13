import React from 'react';
import axios from "axios";
import Group from '../components/Group'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

class GroupList extends React.Component{
    state = {
        groups : [],  
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
        return(
            <div>           
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
                        {this.state.groups.map(group => <Group data ={group}/>)}
                    </tbody>
                </Table>
            
                <Button variant="outline-primary"><Link to='/create-group/post/' requestType="post"> Add Group</Link></Button>
            </div>

        );
    };
}

export default GroupList;