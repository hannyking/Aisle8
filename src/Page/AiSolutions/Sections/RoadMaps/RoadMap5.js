import { Box, Stack, Typography } from '@mui/material'
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import React from 'react'

export const RoadMap5 = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
            }}>
                <Box sx={{
                    backgroundColor: "#C2f261",
                    borderRadius: "100px",
                    padding: 5
                }}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <TrendingUpOutlinedIcon sx={{ fontSize: 150 }} />
                        </Box>
                        <Stack spacing={2} align="left">
                            <Typography variant="h4" align="left" sx={{ fontWeight: "bold" }}>
                                5. Continuous Improvement
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Ongoing partnership for solution refinement and addressing emerging market challenges.
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
