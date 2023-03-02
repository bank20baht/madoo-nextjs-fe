import React, { useState } from 'react'
import { Input, Spacer, Button, Text, Grid, Link } from "@nextui-org/react";
import axios from 'axios';
import { useRouter } from "next/router";

export type Register = {

}

const apiURL = 'http://localhost:4001/register'

const Register = () => {
  const router = useRouter();
  const [register, setRegister] = useState();
  const initalState = {
    name: "",
    lastname: "",
    email: "",
    password: ""
  }
  const [registerData, setRegisterData] = useState(initalState)
  const handleChange = (e: any) => {
    setRegisterData({...registerData, [e.target.name] : e.target.value})
}
  function postRegister() {
    axios.post(apiURL, {
      name: registerData.name,
      lastname: registerData.lastname,
      email: registerData.email,
      password: registerData.password
    }).then((respone) => {
      setRegisterData(respone.data)
    })
    setRegisterData(initalState)
    router.push("/login")
  }
  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Text h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold">Register</Text>
      <Grid xs={12} justify="center">
        <Input  size="lg" width="300px" placeholder="Name" onChange={handleChange}/>
      </Grid>  
      <Grid xs={12} justify="center">
        <Input  size="lg" width="300px" placeholder="Lastname" onChange={handleChange}/>
      </Grid>  
      <Grid xs={12} justify="center">
        <Input  size="lg" width="300px" placeholder="Email" onChange={handleChange}/>
      </Grid>
      <Grid xs={12} justify="center">
        <Input.Password  size="lg" width="300px" placeholder="Password" />
      </Grid>
      <Grid xs={12} justify="center">
        <Input.Password  size="lg" width="300px" placeholder="confirm password" onChange={handleChange}/>
      </Grid>
      <Grid xs={12} justify="center">
        <Button onPress={postRegister}>Register</Button>  
      </Grid>
      <Grid xs={12} justify="center">
        <Text>I already have account</Text>
        <Link href='/Login'>.Login</Link>
      </Grid>  
    </Grid.Container>
    </>
  )
}

export default Register