
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer, Grid,  Link, Button } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardArticle from '@/components/CardArticle';
import { Session } from 'inspector';
export type ArticleData = {
  _id: string,
  title: string,
  content: string,
  user_email: string,
  timestamp: string,
  user_name: string,
  user_img: string
}

const apiURL = 'http://localhost:5000//api/user/'

const MyStory: NextPage = () => {
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
        <Text h1>My Article</Text>
    </Grid.Container>
    {articles?.slice(0).reverse().map((article) => (
                  <CardArticle article={article} key={article._id}/>
              ))?? <Text>No article found</Text>}
    </>
  )
}

export default MyStory