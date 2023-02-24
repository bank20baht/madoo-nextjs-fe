import React  from 'react'
import { useRouter } from "next/router";
import { Input, Spacer, Button, Text, Grid, Link } from "@nextui-org/react";
import { useSession, signIn, signOut,  } from "next-auth/react"

async function handleGoogleLogin() {
  signIn('google', {callbackUrl:"http://localhost:3000"})
}

const Login = () => {
  const { data: session } = useSession()
  const router = useRouter();
  if(session) {
    router.push("/")
  }
  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Text h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold">Login</Text>
      <Grid xs={12} justify="center">
        <Text>Tell you story to whe world 😁</Text>
      </Grid>  
      <Grid xs={12} justify="center">
        <Input  size="lg" width="300px" placeholder="Email" />
      </Grid>
      <Grid xs={12} justify="center">
        <Input.Password  size="lg" width="300px" placeholder="Password" />
      </Grid>
      <Grid xs={12} justify="center">
        <Button >Login</Button>  
      </Grid>
      <Grid xs={12} justify="center">
        <Button bordered color="primary" flat 
        onClick={handleGoogleLogin}>
          Sign in with Google
        </Button>
      </Grid>
      <Grid xs={12} justify="center">
        <Text>don't have account yet?</Text>
        <Link href='/Register'>.Register</Link>
      </Grid>  
    </Grid.Container>
    </>
    
  )
}

export default Login