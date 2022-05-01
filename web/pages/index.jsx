import { React, useState } from "react";
import { Footer } from "../components/footer";
import { Login } from "../components/login";
import { Register } from "../components/register";

import { Box, SimpleGrid, Image } from "@chakra-ui/react";


export default function Index() {
    const [login, setLogin] = useState(true);

    return (
        <>
            <SimpleGrid minChildWidth='420px' columns={2} spacing={1} alignItems="center" justifyItems="center">
                <Box align='center' justifyContent="center" width='60%' height="800">
                    <Box p="m">
                        <Image src="/logo.svg" alt="logo" />
                    </Box>
                    <Box p="10px">
                        SM t'ajuda a comunicar-te i compartir les teves
                        obres amb les persones que formen part del món de
                        l'art.
                    </Box>
                </Box>
                <Box align='center' justifyContent="center" width='60%' height='185'>
                    {login ? <Login onRegisterClick={() => setLogin(false)} /> : <Register />}
                </Box>
            </SimpleGrid>

            <Footer />

        </>
    );
}
