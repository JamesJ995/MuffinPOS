import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { email: formState.email, password: formState.password },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Container>
      <Row>
      <Col className="col py-4 md-offset-4 ">
      
<Card className="col-12 col-md-6 mx-auto">
<Card.Body>
      <h2>Login</h2>
  
<Form onSubmit={handleFormSubmit} className="w-100">
  <Form.Group className="mb-3">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" className="form-control" placeholder="Enter email" name="email"
            type="email"
            id="email"
            onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control  className="form-control" placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange} />
  </Form.Group>

  
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
       <Button variant="primary" type="submit">
    Submit
  </Button> <i>do you need to signup?</i> <Link to="/signup" className="small">Signup Here</Link>
</Form>
</Card.Body>
</Card>
    </Col>
</Row>
</Container>
  );
}

export default Login;
