import { IconButton, Box } from "@chakra-ui/react";

import Image from "next/Image";

export default function Emotion({ src }) {
    return (
        <Box isRound>
            <Image src={src} layout="fill" />
        </Box>
    );
}
