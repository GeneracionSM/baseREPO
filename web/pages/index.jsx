import {
    Box,
    Stack,
    Container,
    SimpleGrid,
    useBreakpointValue,
    Icon,
    Image
} from "@chakra-ui/react";
import { Login } from "../components/login";
import { Register } from "../components/register";
import { Footer } from "../components/footer";
import { useState } from "react";

export default function Index() {
    const [login, setLogin] = useState(true);

    return (
        <>
            <Box position={"relative"} minH={"100vh"}>
                <Container
                    as={SimpleGrid}
                    maxW={"7xl"}
                    columns={{ base: 1, md: 2 }}
                    spacing={{ base: 10, lg: 32 }}
                    py={{ base: 10, sm: 20, lg: 32 }}
                >
                    <Stack spacing={{ base: 10, md: 20 }}>
                        <Box p="m">
                            <Image src="/logo.svg" alt="logo" />
                        </Box>
                    </Stack>
                    <Stack
                        p={{ base: 4, sm: 6, md: 8 }}
                        spacing={{ base: 8 }}
                        maxW={{ lg: "lg" }}
                    >
                        {login ? (
                            <Login onRegisterClick={() => setLogin(false)} />
                        ) : (
                            <Register />
                        )}
                    </Stack>
                </Container>
                <Blur
                    position={"absolute"}
                    top={-10}
                    left={-10}
                    style={{ filter: "blur(70px)" }}
                />
            </Box>

            <Footer />
        </>
    );
}

export const Blur = (props) => {
    return (
        <Icon
            width={useBreakpointValue({ base: "100%", md: "40vw", lg: "30vw" })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >

        </Icon>
    );
};
