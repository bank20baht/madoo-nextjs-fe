import React from "react";
import { Textarea, Button, Text, Grid } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";


const Home: NextPage = () => {
    const router = useRouter();
    const { data: session } = useSession()
    
    return (
        <Grid.Container gap={1}>
            <Text h3>Title</Text>
            <Grid xs={12}>
                <Textarea 
                    name="title" 
                    aria-label="title"
                    placeholder="Article Title"
                    fullWidth={true}
                    rows={1}
                    size="xl"
                    //onChange={handleChange}
                />
            </Grid>
            <Text h3>Article Text</Text>
            <Grid xs={12}>
                <Textarea 
                    name="content" 
                    aria-label="content"
                    placeholder="Article Text"
                    fullWidth={true}
                    rows={6}
                    size="xl"
                    //onChange={handleChange}
                />
            </Grid>
            <Grid xs={12}>
                <Text>Posting as {session?.user?.name}</Text>
            </Grid>
            <Button>Create Article</Button>
        </Grid.Container>
    );
  };
  
  export default Home;