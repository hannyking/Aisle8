import * as React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import "./Sections.css"


export const Story = () => {
    return (
        <Stack
            direction={{ xs: 'column', sm: 'row' }}
        >
            <Box
                sx={{
                    height: { xs: "50vh", sm: "60vh", md: "60vh" },
                    width: { xs: "100%", sm: "50%", md: "50%" },
                    backgroundColor: "#B6F576",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                }}
            >
                <Box sx={{
                    mt: { sm: 10 },
                    width: { xs: "100%", sm: "50%", md: "60%" },
                }}
                >
                    <Box sx={{ padding: 5 }}>
                        <Stack spacing={2}>
                            <Typography
                                color="common.white"
                                variant="h2"
                                align="right"
                                sx={{ fontWeight: "bold" }}>
                                OUR STORY
                            </Typography>
                            <hr className='hr-edge-weak' />
                            <Typography
                                color="common.white"
                                variant="h2"
                                align="right">
                                Aisle8.ai
                            </Typography>
                        </Stack>
                    </Box>
                </Box>
            </Box>
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
                    mt: {xs: 10},
                    mb: {xs: 10},
                    mr: { sm: 0, md: 25 },
                    width: { xs: "80%", sm: "50%", md: "60%" },
                }}
                >
                    <Typography
                        color="black"
                        variant="body1"
                        align="justify"
                    >
                        We bridge this gap with custom AI solutions that are as practical as they are powerful. Our approach is holistic: we don't just provide technology; we deliver end-to-end strategies that encompass identifying opportunities, setting measurable objectives, rigorously testing, and seamlessly integrating into existing infrastructures. Our solutions are designed to 'speak your language,' making AI accessible and transformative without an intense learning curve.
                    </Typography>
                </Box>
            </Box>
        </Stack >
    )
}
