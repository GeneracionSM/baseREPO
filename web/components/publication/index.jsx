import {
    Box,
    Avatar,
    Heading,
    Text,
    Button,
    Stack,
    Divider,
    AvatarGroup
} from "@chakra-ui/react";

import Image from "next/image";

import Emotion from "../emotion";

export function Publication({ userName, userImage, description, postImage }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box p="2" display="flex" alignItems="center">
                <Avatar src={userImage} size="sm" />
                <Heading as="h6" size="xs" p="2">
                    {userName}
                </Heading>
            </Box>

            {/*<Image src={postImage} alt="publication" width={100} height={100}  />*/}

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
                    <Text fontSize="sm">Fecha</Text>
                </Box>
                <Box display="flex" alignItems="baseline" p="2">
                    {/*<Image src="/Emojis/euforic.svg" width={100} height={100} />
                    <Emotion src="/Emojis/euforic.svg" />
                    <Emotion src="/Emojis/content.svg" />
                    <Emotion src="/Emojis/sorpres.svg" />
                    <Emotion src="/Emojis/trist.svg" />
    <Emotion src="/Emojis/enfadat.svg" />*/}
                </Box>
                <Divider orientation="horizontal" variant="solid" />
            </Box>
        </Box>
    );
}
