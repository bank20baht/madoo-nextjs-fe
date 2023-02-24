
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer, Grid,  Link } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from 'axios';

const Home: NextPage = () => {
  const [artical, setArticle] = useState([]);
  const apiURL = 'https://jsonplaceholder.typicode.com/posts'
  useEffect(() => {
    const getArticle = async () => {
      const {data: res} = await axios.get(apiURL)
      setArticle(res)
    }
    getArticle()
  }, [])
  
  return (
    <>
      <Grid.Container gap={1} justify="center">
        <Text h1
          size={60}
          css={{
            textGradient: "45deg, $yellow600 -20%, $red600 100%",
          }}
          weight="bold">Write everything if you want</Text>
      <Grid xs={12} justify="center">
        <Text>the blog is you can write anything</Text>
      </Grid>
      <Grid xs={12} justify="center">
        <Text>There are {artical.length} in database</Text>
      </Grid>  
 
    </Grid.Container>
    </>
  )
}

export default Home
