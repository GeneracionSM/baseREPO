import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    Divider
} from "@chakra-ui/react";

export function Login({ onRegisterClick }) {
    return (
        <Flex align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Entra al teu compte</Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        Disfruta i comparteix el teu art ✌️
                    </Text>
                </Stack>
                <Box rounded={"lg"} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Adreça de correu</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Contrasenya</FormLabel>
                            <Input type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                            >
                                <Checkbox>Recorda'm</Checkbox>
                                <Link color={"blue.400"}>
                                    Has oblidat la contrasenya?
                                </Link>
                            </Stack>
                            <Stack>
                                <Link href="/muro">
                                    <Button
                                        bg={"#d72a73"}
                                        color={"white"}
                                        _hover={{
                                            bg: "#a32057"
                                        }}
                                        w={"full"}
                                    >
                                        Entrar
                                    </Button>
                                </Link>
                                <Divider></Divider>
                                <Button
                                    bg={"#505194"}
                                    color={"white"}
                                    _hover={{
                                        bg: "#343561"
                                    }}
                                    onClick={onRegisterClick}
                                >
                                    Crear un nou compte
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}