import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const Card3 = ({ cardImage }) => {
    return (
        <Box> <CardMedia
            component="img"
            height="300"
            image={cardImage}
        />
            <CardContent>
                <Typography align='center'
                    component="div"
                    gutterBottom variant="h4"
                    sx={{ fontWeight: "bold" }}
                >
                    Retainer + Maintenance Contract
                </Typography>
                <Typography
                    align='center'
                    sx={{ fontSize: 18 }}
                    variant="body1"
                >
                    Long-term stability with a retainer and extended maintenance.
                </Typography>
            </CardContent></Box>
    )
}