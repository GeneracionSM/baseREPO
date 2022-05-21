import { Box } from "@chakra-ui/react";
import React, { useState } from 'react';
import "react-calendar/dist/Calendar.css";
import Calendar from 'react-calendar';

export function RightBar() {
    const [value, onChange] = useState(new Date());

    return (
        <>
            <Box p={"10px"} >
                <Calendar onChange={onChange} value={value} w={{ base: "300px", md: "400px", lg: "500px" }} />
            </Box>
        </>
    );
}
