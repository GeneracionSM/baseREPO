import React from "react";
import { Box, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Box align='center' color='white' bg='purple' height='40' width='100%'>
            <Text p={10} fontSize="2xl">
                Alumnes de la Escola Politècnica Superior - Universitat
                de les Illes Balears &copy; 2022
            </Text>

        </Box>
    );
}
