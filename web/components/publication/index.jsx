import React from "react";
// Importar todo

export function Publication() {
    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Post', // Agregar aquí el nombre de usuario
        title: '', // Poner aquí la descripción de la imagen
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <Box p='2' display='flex' alignItems='center'>
                <Avatar src='https://bit.ly/broken-link' size="sm" />
                <Heading as='h6' size='xs' p="2">
                    Usuario
                </Heading>
            </Box>

            <Image src={property.imageUrl} alt={property.imageAlt} />

            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Heading as='h6' size='xs'>
                        Usuario
                    </Heading>
                    <Text fontSize='sm' p="2">Descripción del post</Text>
                </Box>
                <Box >
                    <Text fontSize='sm'>Fecha</Text>
                </Box>
                <Box display='flex' alignItems='baseline' p="2">
                    <Stack direction='row' spacing={1} align="center">
                        <Button colorScheme='teal' variant='ghost' leftIcon={<Avatar src='https://bit.ly/kent-c-dodds' size="sm" />} isDisabled="true">
                        </Button>
                        <Button colorScheme='teal' variant='ghost' leftIcon={<Avatar src='https://bit.ly/ryan-florence' size="sm" />} isDisabled="true">
                        </Button>
                        <Button colorScheme='teal' variant='ghost' leftIcon={<Avatar src='https://bit.ly/prosper-baba' size="sm" />} >
                        </Button>
                        <Button colorScheme='teal' variant='ghost' leftIcon={<Avatar src='https://bit.ly/tioluwani-kolawole' size="sm" />} >
                        </Button>
                    </Stack>
                </Box>
                <Divider orientation='horizontal' variant="solid" />
            </Box>

        </Box>

    )
}