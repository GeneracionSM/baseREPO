import executeQuery from "../../../lib/db";
import moment from "moment";

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

export default function Emociones({src}) {
    return (
        <>
            <IconButton isRound icon={<Avatar src={src}/>}/>
        </>
    );
}

export default function PopupEntrada() {
    return (
        <>
                                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <Center>
                    <ModalContent>F
                        <ModalHeader>
                            <Center>Benvingut!</Center>
                        </ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Center>Avui serà un bon dia :)</Center>
                        </ModalBody>
                        <Center>
                            <ModalFooter>
                                <AvatarGroup spacing="1rem">
                                    
                                    <Avatar bg="teal.500" />
                                    <Avatar bg="teal.500" />
                                    <Avatar bg="teal.500" />
                                    <Avatar bg="teal.500" />
                                </AvatarGroup>
                            </ModalFooter>
                        </Center>
                    </ModalContent>
                </Center>
            </Modal>
        </>
    );
}
