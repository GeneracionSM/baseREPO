import { SimpleGrid, Box } from "@chakra-ui/react";
import { Header } from "../components/header";
import { LeftBar } from "../components/leftBar";
import { useState, useEffect } from 'react';


export default function Index() {

    return (
        <>
            <Header
                height='50px'
                width='100%'
            />
            <SimpleGrid columns={3} spacing={1}>
                <LeftBar
                    height='2000px'
                    width='50%'
                />

                <Box bg='tomato' height='80px'>

                </Box>
                <Box bg='tomato' height='80px'></Box>
            </SimpleGrid>
        </>
    );
}
