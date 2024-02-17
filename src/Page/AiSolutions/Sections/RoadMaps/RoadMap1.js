import { Box, Stack, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'

export const RoadMap1 = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
            }}>
                <Box sx={{
                    backgroundColor: "#91f291",
                    borderRadius: "100px",
                    padding: 5
                }}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center"
                            }}
                        >
                            <SearchIcon sx={{ fontSize: 150 }} />
                        </Box>
                        <Stack spacing={2} direction={"column"}>
                            <Typography variant="h4" align="left" sx={{ fontWeight: "bold" }}>
                                1. Challenge Identification
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Comprehensive analysis to identify specific business challenges.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Customizing AI impact areas based on your unique needs.
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}