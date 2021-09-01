import { Box } from "@chakra-ui/react";

export const Toast = (toast, string, state) => {
    return toast({
        position: "bottom-right",
        render: () => (
            <Box
                p={3}
                borderRadius={10}
                color="white"
                bg={state === true ? 'blue.300' : 'red.300'}
                width='200px'
            >
                {string}
            </Box>
        )
    });

};

