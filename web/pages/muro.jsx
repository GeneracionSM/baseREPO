import { Flex, Box, Center, Square, Text } from "@chakra-ui/react";
import { Header } from "../components/header";
import { RightBar } from "../components/rightBar";
import { PublicationList } from "../components/publication_list";
import { LeftBar } from "../components/leftBar";
import { PopupWelcome } from "../components/popup_welcome";
import { Publication } from "../components/publication";

export default function Index() {
    return (
        <>

            <Header />
            {/* <PopupWelcome text="KLk manin" /> */}
            <Flex>
                <Box flex="20%">
                    <LeftBar />
                </Box>
                <Box w="60%">
                    <PublicationList/>


                </Box>
                <Box w="20%">
                    <RightBar />
                </Box>
            </Flex>
        </>
    );
}
