import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import UserList from './UserList';
import GroupList from './GroupList';

class UserTabs extends React.Component{
 
    render(){
        return(
            <Tabs defaultActiveKey="users">
                <Tab eventKey="users" title="Users">
                    <UserList/>
                </Tab>
                <Tab eventKey="groups" title="Groups">
                    <GroupList />
                </Tab>                
            </Tabs>
        );
    };

}

export default UserTabs;