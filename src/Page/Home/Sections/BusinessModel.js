import * as React from 'react';
import { Container, Grid, Stack, Typography } from '@mui/material';
import cardImage1 from "../../../img/Profit-Sharing.png"
import cardImage2 from "../../../img/Maintenance-Contract.jpg"
import cardImage3 from "../../../img/Revenue-Sharing.jpg"
import { Card1 } from './Cards/Card1';
import { Card2 } from './Cards/Cards2';
import { Card3 } from './Cards/Card3';

export function BusinessModel() {
    return (
        <>
            <Container sx={{ height: "20vh" }}>
                <Stack sx={{ height: "100%" }} justifyContent="center" align="center">
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        OUR ADAPTIVE BUSINESS MODE
                    </Typography>
                </Stack>
            </Container>
            <Grid container rowSpacing={5} columnSpacing={5}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card1 cardImage={cardImage1} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card2 cardImage={cardImage2} />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card3 cardImage={cardImage3} />
                </Grid>
            </Grid>
        </>
    )
}


