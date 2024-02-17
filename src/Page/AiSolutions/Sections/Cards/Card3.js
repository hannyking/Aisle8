import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

export const Card3 = ({ cardImage }) => {
    return (
        <Card>
            <div>
                <Typography level="title-lg">
                    Manufacturing Industries
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
                        Manufacturers in diverse fields such as Furniture, Jewelry, and Toys, aim to optimize operations, enhance productivity, and streamline supply chains through AI.
                    </Typography>
                </div>
            </CardContent>
        </Card >
    )
}
