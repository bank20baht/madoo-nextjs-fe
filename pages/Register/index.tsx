import React from 'react'
import { Input, Spacer, Button, Text, Grid, Link } from "@nextui-org/react";

const Register = () => {
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
        <Input  size="lg" width="300px" placeholder="Name" />
      </Grid>  
      <Grid xs={12} justify="center">
        <Input  size="lg" width="300px" placeholder="Email" />
      </Grid>
      <Grid xs={12} justify="center">
        <Input.Password  size="lg" width="300px" placeholder="Password" />
      </Grid>
      <Grid xs={12} justify="center">
        <Input.Password  size="lg" width="300px" placeholder="confirm password" />
      </Grid>
      <Grid xs={12} justify="center">
        <Button >Register</Button>  
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