import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

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
    render(){
        
        return(
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg = "6">
                        <Form>
                            <Form.Group>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="example" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Groups</Form.Label>
                                <Form.Control as="select">
                                    {this.state.groups.map(group => <option>{group.name}</option>) }
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