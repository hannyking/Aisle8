import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { CardMedia } from '@mui/material';

export const Card1 = ({ cardImage }) => {
  return (
    <Card>
      <div>
        <Typography level="title-lg">
          Mature Corporations with Legacy Systems
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
            Established enterprises looking to revitalize their operations with cutting-edge technology, transforming outdated systems into modern, efficient infrastructures.
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}
