import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class UserForm extends React.Component{
    state = {
        groups: [],
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/groups/')
        .then(res =>{
            this.setState({
                groups : res.data,
            })
        })
    }
    handleFormSubmit = (event,  requestType, userID) =>{
        event.preventDefault();

        const postObj = {
           username: event.target.elements.username.value,
           groups: [event.target.elements.group.value],
        };
        console.log(postObj);

        
        if(requestType === 'post'){
            axios.post('http://127.0.0.1:8000/users/', postObj )
            .then(res=> console.log(res))
            .catch(err=>console.error(err))
                       
        }
        else if (requestType === 'put'){
            axios.put(`http://127.0.0.1:8000/users/${userID}/`, postObj)
            .then(res=> console.log(res))
            .catch(err=>console.error(err))
                       
        }
        this.props.history.push('/');
        
    }

    render(){
        
        return(
            <Container>
                <Button variant="outline-primary"><Link to='/'> Home</Link></Button>
                <Row className="justify-content-md-center">
                    <Col xs lg = "6">
                        <Form onSubmit = {e=> this.handleFormSubmit(e, this.props.match.params.requestType, this.props.match.params.userID)}>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control name= "username" type="username" placeholder="example" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Groups</Form.Label>
                                <Form.Control as="select" name="group">
                                    {this.state.groups.map(group => <option  value={group.id}>{group.name}</option>) }
                                </Form.Control>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                    Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default UserForm;