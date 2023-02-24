import React, { useEffect } from "react";
import { Textarea, Button, Text, Grid } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import axios from "axios";

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession()
    const apiURL = 'https://jsonplaceholder.typicode.com/posts'
    const postArticle = async () => {
        const Article = {
            title: 'New Post',
            body: 'new aaaaaaa'
        }
        await axios.post(apiURL, Article)
    }
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
                <Button onPress={postArticle}>Create Article</Button>
        </Grid.Container>
    );
};
  
export default Home;