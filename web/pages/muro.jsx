import { Flex, Box, Center, Square, Text } from "@chakra-ui/react";
import { Header } from "../components/header";
import { RightBar } from "../components/rightBar";
import { PublicationList } from "../components/publication_list";
import { LeftBar } from "../components/leftBar";

export default function Index() {
    return (
        <>
            <Header />

            <Flex>
                <Box flex="20%">
                    <LeftBar/>
                </Box>
                <Box bg="blue.200" w="60%">
                    {/* <PublicationList/> */}
                </Box>
                <Box w="20%">
                    <RightBar/>
                </Box>
            </Flex>
        </>
    );
}
