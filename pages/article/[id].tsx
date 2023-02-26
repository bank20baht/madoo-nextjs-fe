
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Text, Spacer, User, Button, Card, Container, Row  } from "@nextui-org/react";
import axios from 'axios';

import styles from "../../styles/Home.module.css";

// localhost:3000/article?id=1
const apiURL = 'http://localhost:5000/api/article/'

export type ArticleData = {
    _id: string,
    title: string,
    content: string,
    user_email: string,
    timestamp: string,
    user_name: string,
    user_img: string
  }

const Article = (props:any) => {

    const router = useRouter();
    const [article, setArticle] = useState<ArticleData | null>();
    const { id } = router.query;

    useEffect( () => {
        if(id != null) {
            axios.get(apiURL + id).then((response) => {
            setArticle(response.data)
            console.log(response.data)
            })
        }
    }, [id])
    
    return (
        <div style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
            <div className={styles.card} style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
                <h1>
                    {article?.title}  
                </h1>         
            </div>
            <Spacer y={1} />        
            <div className={styles.card} style={{whiteSpace: 'pre-wrap', overflowWrap: 'break-word'}}>
            {article?.content}           
            </div>
            <Spacer y={1} /> 
            <User
                src= {article?.user_img}
                name= {article?.user_name}
                size= "md"
            />

        </div>
    )
}

export default Article;