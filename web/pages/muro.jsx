import { Flex, Box, Center, Square, Text } from "@chakra-ui/react";
import { Header } from "../components/header";
import { LeftBar } from "../components/leftBar";
import { RightBar } from "../components/rightBar";
import { PublicationList } from "../components/publication_list";

export default function Index() {
    return (
        <>
            <Header />

            <Flex>
                <Box flex="1" bg="green.500">
                    {/* <LeftBar/> */}
                </Box>
                <Box bg="blue.200" w="60%">
                    {/* <PublicationList/> */}
                </Box>
                <Box flex="1">
                    <RightBar/>
                </Box>
            </Flex>
        </>
    );
}
