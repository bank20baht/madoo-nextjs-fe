
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Text, Spacer, User, Button } from "@nextui-org/react";
import axios from 'axios';
// localhost:3000/article?id=1
const apiURL = 'http://localhost:5000/api/article/'

export type ArticleData = {
    _id: string,
    title: string,
    content: string,
    user_email: string,
    timestamp: string
  }

const Article = (props:any) => {
    console.log("prop ->" + props)
    const router = useRouter();
    const [article, setArticle] = useState<ArticleData | null>();

    const { id } = router.query;
    console.log(id)

    useEffect( () => {
        axios.get(apiURL + id).then((response) => {
            setArticle(response.data)
            console.log(response.data)
        })
    }, [id])
    
    return (
        <>
            <Text h2>{article?.title}</Text>
            <Spacer y={.5} />
            <User
                name={article?.user_email?.toLowerCase()}
                size="md"
            />
            <Spacer y={1} />
            <Text size="$lg">
                {article?.content}
            </Text>
        </>
    )
}

export default Article;