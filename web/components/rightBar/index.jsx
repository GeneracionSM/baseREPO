import { Box } from "@chakra-ui/react";

export function RightBar() {
    return (
        <>
            <Box p={"10px"}>
                {/* <Calendar /> */}
            </Box>
        </>
    );
}

/* const Calendar = () => {
    const [dates, setDates] = useState({
        checkin: new Date("2022-03-28"),

        checkout: new Date("2022-04-28")
    });

    const [open, setOpen] = useState(false);

    return (
        <>
            <DatePicker
                dates={dates}
                setDates={setDates}
                open={open}
                setOpen={setOpen}
            >
                <button onClick={() => setOpen(!open)}>
                    {dates.checkin && dates.checkin.toDateString()} |{" "}
                    {dates.checkout && dates.checkout.toDateString()}
                </button>
            </DatePicker>
        </>
    );
}; */
