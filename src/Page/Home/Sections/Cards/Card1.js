import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const Card1 = ({ cardImage }) => {
    return (
        <Box> 
            <CardMedia
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
                    Retainer + Profit Sharing
                </Typography>
                <Typography
                    align='center'
                    sx={{ fontSize: 18 }}
                    variant="body1"
                >
                    Base retainer coupled with profit sharing from improved metrics.
                </Typography>
            </CardContent></Box>
    )
}
