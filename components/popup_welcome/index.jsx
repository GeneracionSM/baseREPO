import {
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from "@chakra-ui/react";
import executeQuery from "../../lib/db";
import Emotions from "../emotions";
import { useState } from "react";

export function PopUpWelcome() {
    const Overlay = () => (
        <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(20px) hue-rotate(90deg)"
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();

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

export async function getEmotions() {
    try {
        const result = await executeQuery({
            query: "SELECT imagen FROM emocion",
            values: []
        });
    } catch (error) {
        console.log(error);
    }
}
