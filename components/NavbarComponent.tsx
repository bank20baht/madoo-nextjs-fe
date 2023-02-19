import { Navbar, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const NavbarComponent = () => {
    const { data: session } = useSession()
    const router = useRouter();

    return (
        <Navbar isBordered isCompact>
            <Navbar.Brand as={Link} href="/">
                Madoo
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="/mainFeed">Feed</Navbar.Link>
                <Navbar.Link href="/createArticle">Write</Navbar.Link>
            </Navbar.Content>

            <Navbar.Content>
                {!session ?  /*User doesnt exist*/
                    <>
                        <Navbar.Link href="/login">
                            <Button auto flat onClick={() => signIn()}>
                                Sign in
                            </Button>
                        </Navbar.Link>
                    </>
                :         /* User does exist */
                    <>
                        <Navbar.Item>
                            <Text>Hey, {session.user.email}</Text>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button auto flat onPress={() => signOut()}>
                                Sign Out
                            </Button>
                        </Navbar.Item>
                    </>
                }  
            </Navbar.Content>
        </Navbar>
    )
}

export default NavbarComponent;