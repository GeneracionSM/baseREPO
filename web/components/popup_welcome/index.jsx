import {
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    AvatarGroup
} from "@chakra-ui/react";

import executeQuery from "../../../lib/db";
import Emotion from "../emotion";

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

export function PopupWelcome({ text }) {
    const Overlay = () => (
        <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(20px) hue-rotate(90deg)"
        />
    );

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [overlay, setOverlay] = React.useState(<Overlay />);

    return (
        <>
            <Overlay />
            <Modal isCentered onClose={onClose}>
                <Center>
                    <ModalContent>
                        <ModalHeader>
                            <Center>Benvingut!</Center>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>{text}</Center>
                        </ModalBody>
                        <Center>
                            <ModalFooter>
                                <AvatarGroup spacing="1rem">
                                    <Emotion src="../public/Emojis/euforic.svg" />
                                    <Emotion src="../public/Emojis/content.svg" />
                                    <Emotion src="../public/Emojis/sorpres.svg" />
                                    <Emotion src="../public/Emojis/trist.svg" />
                                    <Emotion src="../public/Emojis/enfadat.svg" />
                                </AvatarGroup>
                            </ModalFooter>
                        </Center>
                    </ModalContent>
                </Center>
            </Modal>
        </>
    );
}
