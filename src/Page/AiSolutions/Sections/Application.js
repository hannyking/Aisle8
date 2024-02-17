import React from 'react'
import cardImage1 from "../../../img/Legacy-System.jpg"
import cardImage2 from "../../../img/demand-forecasting.png"
import cardImage3 from "../../../img/manufactory.jpg"
import cardImage4 from "../../../img/Customer Service.png"
import cardImage5  from "../../../img/manufactory.jpg"
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { Card1 } from './Cards/Card1'
import { Card2 } from './Cards/Card2'
import { Card3 } from './Cards/Card3'
import { Card4 } from './Cards/Card4'
import { Card5 } from './Cards/Card5'

export const Application = () => {
    return (
        <>
            <Container sx={{ height: "10vh" }}>
                <Stack sx={{ height: "100%" }} justifyContent="center" align="center">
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        Applications
                    </Typography>
                </Stack>
            </Container>
            <Box sx={{
                pr: { xs: 1, sm: 0, md: 20 },
                pl: { xs: 1, sm: 0, md: 20 }
            }}>
                <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                    <Grid item xs={6} sm={6} md={4}>
                        <Card1 cardImage={cardImage1} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <Card2 cardImage={cardImage2} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <Card3 cardImage={cardImage3} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <Card4 cardImage={cardImage4} />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4}>
                        <Card5 cardImage={cardImage5} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
