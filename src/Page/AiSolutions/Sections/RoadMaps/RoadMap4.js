import { Box, Stack, Typography } from '@mui/material'
import ModelTrainingOutlinedIcon from '@mui/icons-material/ModelTrainingOutlined';
import React from 'react'

export const RoadMap4 = () => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
        }}>
            <Box sx={{
                width: { xs: "100%", sm: "90%", md: "80%" },
            }}>
                <Box sx={{
                    backgroundColor: "#f2f230",
                    borderRadius: "100px",
                    padding: 5
                }}>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={5}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <ModelTrainingOutlinedIcon sx={{ fontSize: 150 }} />
                        </Box >
                        <Stack spacing={2} align="left">
                            <Typography variant="h4" align="left" sx={{ fontWeight: "bold" }}>
                                4. Scalability and Training
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Future-focused solutions ensuring scalability and adaptability.
                            </Typography>
                            <Typography variant="body1" sx={{ fontSize: 18 }}>
                                Comprehensive training for sustainable growth.
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Box>
        </Box>
    )
}
