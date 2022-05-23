import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Divider
} from "@chakra-ui/react";
import { useState } from "react";
/* import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"; */

export function Register() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Flex align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Crea el teu compte
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        i disfruta de l'art arreu del món ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="firstName" isRequired>
                            <FormLabel>Nom</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>Primer Cognom</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName" isRequired>
                                    <FormLabel>Segon Cognom</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="date" isRequired>
                            <FormLabel>Data de naixement</FormLabel>
                            <Input type="date" />
                        </FormControl>
                        <FormControl id="email" isRequired>
                            <FormLabel>Correu electrònic</FormLabel>
                            <Input type="email" />
                        </FormControl>
                        <FormControl id="user" isRequired>
                            <FormLabel>Usuari</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel>Contrassenya</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
                                            )
                                        }
                                    >
                                        {/* {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )} */}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"#d72a73"}
                                color={"white"}
                                _hover={{
                                    bg: "#a32057"
                                }}
                            >
                                Registrar
                            </Button>
                        </Stack>
                        <Divider />
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Ja ets usuari?{" "}
                                <Link href="/" color={"blue.400"}>
                                    Iniciar sessió
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}
