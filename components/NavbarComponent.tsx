import { Navbar, Button, Text } from "@nextui-org/react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const NavbarComponent = () => {
    const { data: session } = useSession()

    return (
        <Navbar isBordered isCompact>
            <Navbar.Brand as={Link} href="/">
                MADOO
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="/Feed">Feed</Navbar.Link>
                <Navbar.Link href="/Write">Write</Navbar.Link>
            </Navbar.Content>

            <Navbar.Content>
                {!session ?  /*User doesnt exist*/
                    <>
                        <Navbar.Link href="/Login">
                            <Button auto flat>
                                Login
                            </Button>
                        </Navbar.Link>
                    </>
                :         /* User does exist */
                    <>
                        <Navbar.Item>
                            <Text>Hey, {session?.user?.name}</Text>
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