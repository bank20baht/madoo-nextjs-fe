
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer, Grid,  Link, Card, Container, Row } from "@nextui-org/react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardArticle from '@/components/CardArticle';

export type ArticleData = {
  _id: string,
  title: string,
  content: string,
  user_email: string,
  timestamp: string,
  user_name: string
}

const apiURL = 'http://localhost:5000/api/articles'

const Feed = () => {
  const [articles, setArticles] = useState<ArticleData[] | null>();

  useEffect(() => {
    axios.get(apiURL).then((response) => {
      setArticles(response.data)
      console.log(response.data)
    })
  }, [])

  return (
  <Container>
      <Card css={{ $$cardColor: '$colors$primary' }}>
        <Card.Body>
          <Row justify="center" align="center">
            <Text h6 size={15} color="white" css={{ m: 0 }}>
              NextUI gives you the best developer experience with all the features
              you need for building beautiful and modern websites and
              applications.
            </Text>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Feed
