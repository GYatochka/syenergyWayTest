import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from "react-router-dom";

class GroupForm extends React.Component{
    state = {
        groupForEditing: {},
    }

    componentDidMount(){
        axios.get(`http://127.0.0.1:8000/groups/${this.props.match.params.groupID}`)
        .then(res =>{
            this.setState({
                groupForEditing : res.data,
            })
        })
    }
    handleFormSubmit = (event, requestType, groupID) =>{
        event.preventDefault();
        console.log(this.props.match.params.requestType, this.props.match.params.groupID);
        const postObj = {
           name: event.target.elements.name.value,
           description: event.target.elements.description.value
        };
        console.log(postObj);

        if(requestType === 'post'){
             axios.post(`http://127.0.0.1:8000/groups/`,  postObj )
                                .then(res=> console.log(res))
                                .catch(err=>console.error(err))

         }
         else if (requestType === 'put')
         {
              axios.put(`http://127.0.0.1:8000/groups/${groupID}/`,  postObj)
                                .then(res=> console.log(res))
                                .catch(err=>console.error(err))

         }
    }
    render(){
        
        return(
            <Container>
                <Button variant="outline-primary"><Link to='/'> Home</Link></Button>
                <Row className="justify-content-md-center">
                    <Col xs lg = "6">
                        <h1>Group creation</h1>
                        <Form onSubmit = {e=> this.handleFormSubmit(e, this.props.match.params.requestType, this.props.match.params.groupID)}>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="name" name="name" placeholder= {this.state.groupForEditing.name} />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" name='description' placeholder= {this.state.groupForEditing.description}/>
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

export default GroupForm;