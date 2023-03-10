import React, { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button, Text, Grid, Link } from "@nextui-org/react";
import { useSession, signIn } from "next-auth/react";
import axios from "axios";

const apiURL = "http://localhost:5000/login";

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  async function handleGoogleLogin() {
    await signIn("google", { callbackUrl: "http://localhost:3000" });
  }

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  async function handleLogin() {
    try {
      const response = await axios.post(apiURL, loginData);
      setLoginData({ email: "", password: "" });
      console.log(response.data);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  if (session) {
    router.push("/");
  }

  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold"
        >
          Login
        </Text>
        <Grid xs={12} justify="center">
          <Text>Tell you story to whe world 😁</Text>
        </Grid>
        <Grid xs={12} justify="center">
          <Input
            size="lg"
            width="300px"
            placeholder="Email"
            aria-label="Email address input field"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Input.Password
            size="lg"
            width="300px"
            placeholder="Password"
            aria-label="password input field"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={12} justify="center">
          <Button onPress={handleLogin}>Login</Button>
        </Grid>
        <Grid xs={12} justify="center">
          <Button bordered color="primary" flat onClick={handleGoogleLogin}>
            Sign in with Google
          </Button>
        </Grid>
        <Grid xs={12} justify="center">
          <Text>Don't have an account yet?</Text>
          <Link href="/Register">.Register</Link>
        </Grid>
      </Grid.Container>
    </>
  );
};

export default Login;
