import React from "react";
import { Box, Stack, Button } from '@chakra-ui/react';
import PropTypes from 'prop-types';


export function LeftBar({ height, width }) {

    return (
        <>

            <Box height={`${height}`} w={`${width}`} border='2px' borderColor='black.200'>
                <Stack direction='column' spacing={4} align='left'>
                    <Button colorScheme='teal' variant='ghost'>
                        Inicio
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        Categorias
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        Escuela virtual
                    </Button>
                    <Button colorScheme='teal' variant='ghost'>
                        Crear publicación
                    </Button>
                </Stack>
            </Box>
        </>
    );
}

LeftBar.defaultProps = {
    height: '',
    width: ''
};

LeftBar.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};