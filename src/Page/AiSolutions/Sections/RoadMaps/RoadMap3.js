import { Box, Stack, Typography } from '@mui/material'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import React from 'react'

export const RoadMap3 = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
            }}>
                <Box sx={{
                    backgroundColor: "#30f2f2",
                    borderRadius: "100px",
                    padding: 5
                }}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <SmartToyOutlinedIcon sx={{ fontSize: 150 }} />
                        </Box>
                        <Stack spacing={2} direction={"column"} align="left">
                            <Typography variant="h4" align="left" sx={{ fontWeight: "bold" }}>
                                3. Custom AI Solutions
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Tailoring AI models for targeted goals and rigorous testing.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Solutions in retail forecasting, generative AI, labor scheduling, and AI-human integrated systems.
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
