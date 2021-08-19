import React,{useState} from 'react';
import { useAuth } from '../../hooks'
import { auth } from 'firebase'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
  const  {saveUser, user} = useAuth()
  const  [email,setEmail] = useState('');
  const  [password,setPassword] = useState('');
  const  history =  useHistory()
  const  handleLogin = (e)=>{
    e.preventDefault();
    auth().signInWithEmailAndPassword(email, password).then(async(userCredential) => {
      var user = userCredential.user;
      const  token = await user.getIdTokenResult();
      saveUser({
        token: token.token
      })
    })

    history.push('/home')
  }

  return (
    <Form inline onSubmit={handleLogin}>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Email
        </Label>
        <Input
          onChange={e=>setEmail(e.target.value)}
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
        />
      </FormGroup>{' '}
      <FormGroup>
        <Label for="examplePassword" hidden>
          Password
        </Label>
        <Input
          onChange={e=>setPassword(e.target.value)}
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  );
};

export default Login;
