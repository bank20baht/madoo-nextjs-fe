import { Navbar, Button, Text, User, Avatar } from "@nextui-org/react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const NavbarComponent = () => {
    const { data: session } = useSession()

    return (
        <Navbar isBordered isCompact variant= "floating"
        css = {{  }}
        >
            <Navbar.Brand as={Link} href="/">
            <Text h3
            css={{
                textGradient: "45deg, $yellow600 -5%, $red600 100%",
            }}
            weight="bold">Madoo.</Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="xs" variant="highlight-rounded">
                <Navbar.Link href="/Feed">Feed</Navbar.Link>
                <Navbar.Link href="/Write">Write</Navbar.Link>
            </Navbar.Content>

            <Navbar.Content>
                {!session ?  /*User doesnt exist*/
                    <>
                        <Navbar.Link href="/Login">
                            <Button bordered color="error" auto>
                                Login
                            </Button>
                        </Navbar.Link>
                        <Navbar.Link href="/Register">
                            <Button auto color="error">
                                Register
                            </Button>
                        </Navbar.Link>
                    </>
                    
                :         /* User does exist */
                    <>
                        <Navbar.Item>
                            <Text>Hi, {session?.user?.name}</Text>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button bordered color="error" auto onPress={() => signOut()}>
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