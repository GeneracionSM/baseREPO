import { Image } from "@chakra-ui/react";

export function Avatar({ src }) {
    return (
        <Image
            borderRadius="full"
            boxSize="60px"
            src="https://bit.ly/dan-abramov"
            p="5px"
        />
    );
}
