import { Flex, Box, Center, Square, Text } from "@chakra-ui/react";
import { Header } from "../components/header";
import { RightBar } from "../components/rightBar";
import { PublicationList } from "../components/publication_list";
import { LeftBar } from "../components/leftBar";
import { PopUpWelcome } from "../components/popup_welcome";

export default function Muro() {
    return (
        <>
            {/* <PopUpWelcome /> */}
            <Header />
            <Flex>
                <Box flex="20%">
                    <LeftBar />
                </Box>
                <Box w="60%">
                    <PublicationList />
                </Box>
                <Box w="20%">
                    <RightBar />
                </Box>
            </Flex>
        </>
    );
}
