import {
    Center,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import Emotions from "../emotions";

export function PopUpWelcome() {
    const { onClose } = useDisclosure();

    return (
        <>
            <Modal isCentered onClose={onClose}>
                <Center>
                    <ModalContent>
                        <ModalHeader>
                            <Center>Benvingut!</Center>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>Com et sents?</Center>
                        </ModalBody>
                        <Center>
                            <ModalFooter>
                                <Emotions />
                            </ModalFooter>
                        </Center>
                    </ModalContent>
                </Center>
            </Modal>
        </>
    );
}
