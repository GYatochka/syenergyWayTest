import React from 'react';
import axios from "axios";
import Group from '../components/Group'

class GroupList extends React.Component{
    state = {
        groups : [],  
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8000/users/')
        .then(res =>{
            this.setState({
                groups : res.data,
            })
        })
    }
    render(){
        return(
            <Group data ={this.state.groups}/>
        );
    };
}

export default GroupList;