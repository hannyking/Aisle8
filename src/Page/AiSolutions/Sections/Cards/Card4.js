import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

export const Card4 = ({ cardImage }) => {
    return (
        <Card>
            <div>
                <Typography level="title-lg">
                    Customer Service Companies
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
                        Customer-focused businesses, exemplified by Meed, pursue innovative AI strategies to develop robust loyalty programs and elevate customer experiences.
                    </Typography>
                </div>
            </CardContent>
        </Card>
    )
}
