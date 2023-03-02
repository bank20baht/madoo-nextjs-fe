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
                            <Navbar.Link href="/Write">
                                <Button auto bordered color="error">
                                    Write
                                </Button>
                            </Navbar.Link>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button auto bordered color="error">
                                Hi, {session?.user?.name}
                            </Button>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button color="error" auto onPress={() => signOut()}>
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