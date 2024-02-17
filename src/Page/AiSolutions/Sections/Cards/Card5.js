import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

export const Card5 = ({ cardImage }) => {
    return (
        <Card>
            <div>
                <Typography level="title-lg">
                    Broad Industry Application
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
                        And a wide array of other industries where AI integration can be a game-changer, offering bespoke solutions to meet unique challenges and drive growth
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
