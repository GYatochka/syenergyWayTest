import React from 'react';
import Group from '../components/Group'

class GroupList extends React.Component{
    state = {
        groups : [],  
    }
    render(){
        return(
            <Group data ={this.state.groups}/>
        );
    };
}

export default GroupList;