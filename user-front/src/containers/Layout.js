import React from 'react';
import UserTabs from './Tabs'
import BaseRouter from '../routes'

class Layout extends React.Component{
 
    render(){
        return(
            <BaseRouter>
                <UserTabs/>
            </BaseRouter>
        );
    };

}

export default Layout;