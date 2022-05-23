export function PopUpPublication() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Button onClick={onOpen}>Publicar</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Nova publicació</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody align="center" spacing={4}>
                        <Flex direction="column">
                            <Button
                                variant="outline"
                                leftIcon={<i class="fa-solid fa-paperclip"></i>}
                                onClick={() =>
                                    selectFiles(
                                        { accept: "image/*" },
                                        ({ name, size, source, file }) => {
                                            console.log("Files Selected", {
                                                name,
                                                size,
                                                source,
                                                file
                                            });
                                        }
                                    )
                                }
                            >
                                Seleccionar arxiu
                            </Button>
                            <Spacer />
                            <Input
                                mt={3}
                                variant="filled"
                                placeholder="Descripció de la publicació"
                            />
                        </Flex>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant="solid">Pujar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
