
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer, Grid,  Link } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardArticle from '@/components/CardArticle';
export type ArticleData = {
  _id: string,
  id: number,
  title: string,
  content: string,
  user_email: string,
  timestamp: string
}

const apiURL = 'http://localhost:5000/api/articles'

const Home: NextPage = () => {
  const [articles, setArticles] = useState<ArticleData[] | null>();

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setArticles(response.data)
      console.log(response.data)
    })
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
        <Text>There are in database</Text>

      </Grid>  
           {articles?.map((article) => (
                  <CardArticle article={article} key={article._id}/>
              ))?? <Text>No article found</Text>}
    </Grid.Container>
    </>
  )
}

export default Home
