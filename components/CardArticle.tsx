import React from 'react'
import type { NextPage } from 'next'
import { useRouter } from "next/router";
import { Text, Card } from "@nextui-org/react";

interface Props {
    article: any
}

const CardArticle: NextPage<Props> = (props:any) => {
    const router = useRouter();
    const { article } = props;

    return (
        <Card
            isPressable
            css={{mb: "$10"}}
            onPress={() => router.push("/article/" + article._id)}
        >
            <Card.Body>
                <Text h2>{article.title}</Text>
                <Text b>posted {article.timestamp}</Text>
                <Text b>By {article.user_email.toLowerCase()}</Text>
            </Card.Body>
        </Card>
    );
}

export default CardArticle