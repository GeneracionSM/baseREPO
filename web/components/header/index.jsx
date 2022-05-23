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
    useDisclosure,
    Stack,
    useColorMode,
    Center
} from "@chakra-ui/react";

export function Header() {
    return (
        <>
            <Box bgGradient={'linear(to-r,#FF0080, #E5256E, #ba327a, #A7377F)'} color={'white'} px={4} sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
                <Flex
                    
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    
                >
                    <Box>Generació SM</Box>

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
                                <MenuList alignItems={"center"} color={'black'}>
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
                                    <MenuItem>Perfil</MenuItem>
                                    <MenuItem>Historial d'emocions</MenuItem>
                                    <MenuItem>
                                            <Link href="/">
                                                Sortir
                                            </Link>
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
