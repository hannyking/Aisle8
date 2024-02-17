import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

export const Card2 = ({ cardImage }) => {
    return (
        <Card>
            <div>
                <Typography level="title-lg">
                    Retailers Requiring Dynamic Forecasting
                </Typography>
            </div>
            <AspectRatio minHeight="120px" maxHeight="250px">
                <CardMedia
                    component="img"
                    image={cardImage}
                />
            </AspectRatio>
            <CardContent orientation="horizontal">
                <div>
                    <Typography fontSize="lg" fontWeight="lg" align="justify">
                        Retail businesses, including sector leaders like Fast Fish, seeking advanced AI solutions for dynamic inventory management and market trend forecasting.
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
