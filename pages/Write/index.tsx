import React, { useEffect, useState } from "react";
import { Textarea, Button, Text, Grid, Link } from "@nextui-org/react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import axios from "axios";


const apiURL = 'http://localhost:5000/api/addArticle'

const Home = () => {
    const router = useRouter();
    const { data: session } = useSession()
    const [articles, setArticles] = useState();    
    const initalState = {
        title: "",
        content: ""
    }

    const [articleData, setArticleData] = useState(initalState)

    const handleChange = (e: any) => {
        setArticleData({...articleData, [e.target.name] : e.target.value})
    }

    console.log(articleData)
    async function postArticle() {
        try {
          const response = await axios.post(apiURL, {
            title: articleData.title,
            content: articleData.content,
            user_email: session?.user?.email,
            user_name: session?.user?.name,
            user_img: session?.user?.image,
          });
          setArticles(response.data);
          router.push('/');
        } catch (error) {
          console.error(error);
        }
        setArticleData(initalState);
      }
    if(!session) {
        return (
            <Grid.Container alignItems="center">
                <Grid xs={12} justify="center" >
                    <Text h2>Sorry, you need to log in first. to be able to write</Text>
                </Grid>  
                <Grid xs={12} justify="center">
                    <Text>I already have account</Text>
                    <Link href='/Login'>.Login</Link>
                </Grid>  
            </Grid.Container>
        );
    }
    return (
        <Grid.Container gap={2.5}>
            <Text h3>Title</Text>
            <Grid xs={12}>
                <Textarea 
                    maxLength={95}
                    name="title" 
                    aria-label="title"
                    placeholder="Article Title"
                    fullWidth={true}
                    rows={1}
                    size="xl"
                    onChange={handleChange}
                />
            </Grid>
            <Text h3>Article Text</Text>
            <Grid xs={12}>
                <Textarea 
                    name="content" 
                    aria-label="content"
                    placeholder="Article Text"
                    fullWidth={true}
                    rows={18}
                    size="xl"
                    onChange={handleChange}
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