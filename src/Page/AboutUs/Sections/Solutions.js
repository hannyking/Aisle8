import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import "./Sections.css"

export const Solutions = () => {
    return (
        <Stack
            direction={{ xs: 'column-reverse', sm: 'row' }}
        >
            <Box
                sx={{
                    height: { xs: "100%", sm: "50%", md: "60vh" },
                    width: { xs: "100%", sm: "50%", md: "50%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    mt: { xs: 10 },
                    mb: { xs: 10 },
                    ml: { sm: 0, md: 25 },
                    width: { xs: "80%", sm: "50%", md: "60%" },
                }}
                >
                    <Typography
                        color="black"
                        variant="body1"
                        align="justify"
                    >
                        Despite recognizing the critical importance of AI in driving innovation and efficiency, many enterprises struggle to harness its full potential. Challenges such as scarce resources, limited technical expertise, and the complexities of integrating advanced AI into existing systems have left a significant gap in the market. These obstacles are particularly acute for non-tech entities in sectors like retail, manufacturing, and legal, among others.
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    height: { xs: "50vh", sm: "60vh", md: "60vh" },
                    width: { xs: "100%", sm: "50%", md: "50%" },
                    backgroundColor: "#76b5f5",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    width: { xs: "100%", sm: "50%", md: "60%" },
                }}
                >
                    <Box sx={{ padding: 5 }}>
                        <Stack spacing={2}>
                            <Typography
                                color="common.white"
                                variant="h2"
                                align="left"
                                sx={{ fontWeight: "bold" }}>
                                OUR SOLUTION
                            </Typography>
                            <hr className='hr-edge-weak' />
                            <Typography
                                color="common.white"
                                variant="h2"
                                align="left">
                                Aisle8.ai
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
        </Stack >
    )
}
