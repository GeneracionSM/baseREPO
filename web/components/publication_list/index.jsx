import { Publication } from "../publication";
import { Box } from "@chakra-ui/react";

const publications = [
    {
        userName: "user22",
        userImage: "https://bit.ly/broken-link",
        description: "This is a description",
        postImage: "http://img.desmotivaciones.es/201108/jj_64.jpg"
    },
    {
        userName: "Kieran",
        userImage: "https://bit.ly/broken-link",
        description: "Esperanza mi reina <3",
        postImage: "http://img.desmotivaciones.es/201108/lafelicidad_17.jpg"
    },
    {
        userName: "Jorge Grande",
        userImage: "https://bit.ly/broken-link",
        description: "Cuándo comemos??",
        postImage: "http://img.desmotivaciones.es/201108/lafelicidad_17.jpg"
    },
];

export function PublicationList() {
    return (
        <>
            {
                <Box>
                    {publications.map((publication, i) => (
                        <Publication key={i} {...publication} />
                    ))}
                </Box>
            }
        </>
    );
}
