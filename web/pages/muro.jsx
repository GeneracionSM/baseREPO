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
                <Center w="20%" bg="green.500" ml="20px">
                    {/* <LeftBar/> */}
                </Center>
                <Square bg="blue.200" w="60%">
                    {/* <PublicationList/> */}
                </Square>
                <Box flex="1" bg="blue.100">
                    <RightBar/>
                </Box>
            </Flex>
        </>
    );
}
