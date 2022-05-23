import { Publication } from "../publication";
import { Flex } from "@chakra-ui/react";

const publications = [
    {
        userName: "Maria",
        userImage: "https://bit.ly/broken-link",
        description: "Avui em sento bé!",
        postImage: "https://i.imgur.com/AmkKjFI.jpeg"
    },
    {
        userName: "Paula",
        userImage: "https://bit.ly/broken-link",
        description: "Avui estic inspirada!",
        postImage: "https://i.imgur.com/4rvkXor.jpeg"
    },
    {
        userName: "Jorge",
        userImage: "https://bit.ly/broken-link",
        description: "Quina llibertat!",
        postImage: "https://i.imgur.com/nlBXQxT.jpeg"
    }
];

export function PublicationList() {
    return (
        <>
            <Flex flexDirection={"column"} alignItems={"center"}>
                {publications.map((publication, i) => (
                    <Publication key={i} {...publication} />
                ))}
            </Flex>
        </>
    );
}
