import { Publication } from "../publication";
import { Flex } from "@chakra-ui/react";

const publications = [
    {
        userName: "Maria",
        userImage: "https://bit.ly/broken-link",
        description: "Avui em sento bé!",
        postImage: "http://img.desmotivaciones.es/201108/jj_64.jpg"
    },
    {
        userName: "Kieran",
        userImage: "https://bit.ly/broken-link",
        description: "Quina llibertat!",
        postImage: "http://img.desmotivaciones.es/201108/lafelicidad_17.jpg"
    },
    {
        userName: "Jorge Grande",
        userImage: "https://bit.ly/broken-link",
        description: "Quina llibertat!",
        postImage: "http://img.desmotivaciones.es/201108/lafelicidad_17.jpg"
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
