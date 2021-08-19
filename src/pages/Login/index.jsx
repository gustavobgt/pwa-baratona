import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Card,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

import { useAuth } from '../../hooks';
import { auth } from '../../firebase';
import { HOME } from '../../navigation/router-paths';

const Login = () => {
  const { saveUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState('');

  const history = useHistory();

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (userCredential) => {
        var user = userCredential.user;
        const token = await user.getIdTokenResult();
        saveUser({
          token: token.token,
        });
        setLoading(false);
        history.push(HOME);
      })
      .catch((err) => {
        console.log('ERROR = ', err);
      });
  };

  return (
    <Container>
      <Card style={{ marginTop: '120px' }}>
        <CardBody>
          <Form inline onSubmit={handleLogin}>
            <FormGroup>
              <Label for="exampleEmail" hidden>
                Email
              </Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Email"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword" hidden>
                Password
              </Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="Password"
                required
              />
              <Button type="submit" style={{ marginTop: '10px' }}>
                {loading ? 'Carregando...' : 'Entrar'}
              </Button>
            </FormGroup>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
