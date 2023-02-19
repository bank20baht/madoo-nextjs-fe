
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Spacer } from "@nextui-org/react";
// localhost:3000
const Home: NextPage = () => {
  return (
    <>
      <Text h2>Write everything if you want</Text>
      <Spacer y={1} />
      <Text size="$lg">
        the blog is you can write anything 
      </Text>
    </>
  )
}

export default Home
