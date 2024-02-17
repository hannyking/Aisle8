import { SmartToyOutlined } from '@mui/icons-material'
import { Box, Container, Divider, Grid, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const PAGES = ["Home", "AI solutions", "About Us", "Team"]

export const Footer = () => {
    return (
        <Box>
            <Container>
                <Divider sx={{ mt: 10, mb: 10 }} />
                <Grid container spacing={8}>
                    <Grid container spacing={2}>
                    <Grid item xs={3} sm={3} md={3} lg={3}>

                    </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <Stack
                                sx={{
                                    height: "100%",
                                    alignItems: `center`
                                }}
                                direction={`row`}

                            >
                                <IconButton component={HashLink} smooth to="/Home#top" size="large">
                                    <SmartToyOutlined />
                                </IconButton>
                                <Typography sx={{ frontSize: "1.5 rem" }} variant="h6" component="div" style={{ color: 'black' }}>
                                    Aisle8
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3}>
                            <Stack spacing={2.5}>
                                <Typography>
                                    Menu
                                </Typography>
                                {PAGES.map((page, index) => (
                                    <Typography
                                        component={Link}
                                        to={page}
                                        key={index}
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            cursor: "pointer",
                                            textDecoration: 'none',
                                            "&:hover": {
                                                color: "text.primary",
                                                textDecoration: 'none'
                                            },
                                        }}
                                    >
                                        {page}

                                    </Typography>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Developers */}
                        <Grid item xs={3} sm={3} md={3} lg={3}>

                            <Stack spacing={2.5}>
                                <Typography>
                                    Social Media
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    sx={{
                                        cursor: "pointer",
                                        "&:hover": {
                                            color: "text.primary",
                                        },
                                    }}
                                >
                                    Github
                                </Typography>
                            </Stack>
                        </Grid>
                    </Grid>

                </Grid>

                <Divider sx={{ mt: 6, mb: 5 }} />
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                    sx={{ pb: 6 }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © 2024 Aisle8, All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>
        </Box>
    )
}