import React, { useState } from 'react';
import { Input, Button, Text, Grid, Link } from '@nextui-org/react';
import axios from 'axios';
import { useRouter } from 'next/router';

const apiURL = 'http://localhost:5000/register';

const Register = () => {
  const router = useRouter();
  const initialState = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirm_password: ''
  };
  const [registerData, setRegisterData] = useState(initialState);
  
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };
  
  async function postRegister() {
    try {
      const response = await axios.post(apiURL, {
        first_name: registerData.first_name,
        last_name: registerData.last_name,
        email: registerData.email,
        password: registerData.password,
        confirm_password: registerData.confirm_password
      });
      setRegisterData(initialState);
      router.push('/Login');
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Text
          h1
          size={60}
          css={{ textGradient: '45deg, $yellow600 -20%, $red600 100%' }}
          weight="bold"
        >
          Register
        </Text>
        <Grid xs={12} justify="center">
          <Input
            aria-label="Name"
            size="lg"
            width="300px"
            placeholder="Name"
            name="first_name"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Input
            aria-label="Lastname"
            size="lg"
            width="300px"
            placeholder="Lastname"
            name="last_name"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Input
            aria-label="Email"
            size="lg"
            width="300px"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Input.Password
            aria-label="Password"
            size="lg"
            width="300px"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Input.Password
            aria-labelledby="confirm-password-label"
            size="lg"
            width="300px"
            placeholder="Confirm Password"
            name="confirm_password"
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Button onPress={postRegister}>Register</Button>
        </Grid>
        <Grid xs={12} justify="center">
          <Text>I already have an account</Text>
          <Link href="/Login">Login</Link>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Register