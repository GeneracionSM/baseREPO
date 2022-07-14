import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    Center
} from "@chakra-ui/react";

const DailyQuotes = [
    "La innovación distingue al líder del seguidor - Steve Jobs",
    "Si puedes soñarlo, puedes hacerlo - Walt Disney",
    "El secreto para salir adelante es comenzar - Mark Twain",
    "Sé valiente. Toma riesgos. Nada puede sustituir la experiencia - Paulo Coelho",
    "No hay nada más importante que la capacidad de pensar y actuar - William James",
    "La vida es una serie de acontecimientos que no debemos esperar a que nos den la oportunidad de actuar - Charles R. Swindoll"
];



export function Header() {
    return (
        <>
            
            <Box
                bgGradient={"linear(to-r,#FF0080, #E5256E, #ba327a, #A7377F)"}
                color={"white"}
                px={4}
                sx={{
                    position: "-webkit-sticky",
                    /* Safari */ position: "sticky",
                    top: "0"
                }}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Box>
                        <Link href="/muro">Generació SM</Link>
                    </Box>
                    
                    <Box className="frasemotivadora">
                            {DailyQuotes[0]}
                    </Box>
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={
                                            "https://avatars.dicebear.com/api/male/username.svg"
                                        }
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"} color={"black"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={
                                                "https://avatars.dicebear.com/api/male/username.svg"
                                            }
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>
                                        <Link href="/perfil">Perfil</Link>
                                    </MenuItem>
                                    <MenuItem>Historial d'emocions</MenuItem>
                                    <MenuItem>
                                        <Link href="/">Sortir</Link>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
