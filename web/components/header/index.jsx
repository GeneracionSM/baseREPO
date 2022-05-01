import React from "react";
import { Box } from '@chakra-ui/react';
import { Flex, Spacer } from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import PropTypes from 'prop-types';

export function Header({ height, width }) {
    return (
        <Box bgGradient='linear(to-r,#FF0080, #E5256E, #ba327a, #A7377F)' height={`${height}`} w={`${width}`} color='white' fontSize='3xl' pl={3}>

            <Flex>
                <Box>
                    Nombre de la aplicación
                </Box>
                <Spacer />
                <Box p='3'>
                    <Avatar bg='teal.500' boxSize='30px' />
                </Box>
            </Flex>


        </Box>
    );
}
Header.defaultProps = {
    height: '',
    width: ''
};

Header.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
};