import { Box, Stack, Typography } from '@mui/material'
import DataUsageIcon from '@mui/icons-material/DataUsage';
import React from 'react'

export const RoadMap2 = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
            }}>
                <Box sx={{
                    backgroundColor: "#61f2c2",
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
                            <DataUsageIcon sx={{ fontSize: 150 }} />
                        </Box>
                        <Stack spacing={2} direction={"column"} align="left">
                            <Typography variant="h4" align="left" sx={{ fontWeight: "bold" }}>
                                2. Data Pipeline Optimization
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Enhancing data infrastructure for performance.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Automating data pipelines; AI-driven customer segmentation and operational efficiency.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Integration into legacy systems for a seamless transition.
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
