import { Box, Avatar, Heading, Text, Divider, Image } from "@chakra-ui/react";
import { Emotions } from "../emotions";

export function Publication({ userName, userImage, description, postImage }) {
    return (
        <Box
            minW="xl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            mt={5}
        >
            <Box p="2" display="flex" alignItems="center">
                <Avatar src={userImage} size="sm" />
                <Heading as="h6" size="xs" p="2">
                    {userName}
                </Heading>
            </Box>

            <Image
                src={postImage}
                alt="publication"
                width={"100%"}
                height={"100%"}
            />

            <Box p="6">
                <Box display="flex" alignItems="baseline">
                    <Heading as="h6" size="xs">
                        {userName}
                    </Heading>
                    <Text fontSize="sm" p="2">
                        {description}
                    </Text>
                </Box>
                <Box>
                    <Text fontSize="sm">Data</Text>
                </Box>
                <Divider orientation="horizontal" variant="solid" />
                <Emotions />
            </Box>
        </Box>
    );
}
