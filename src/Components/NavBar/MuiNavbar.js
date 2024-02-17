import { SmartToyOutlined } from "@mui/icons-material"
import { AppBar, IconButton, Toolbar, Typography, Button, Tabs, Tab, useTheme, useMediaQuery } from "@mui/material"
import React, { useState } from "react"
import { DrawerComp } from "./DrawerComp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const PAGES = ["Home", "AI Solutions", "About Us", "Team"]
export const MuiNavbar = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <AppBar position="sticky" sx={{ background: "#FFFF" }}>
            <Toolbar>
                <IconButton component={HashLink} smooth to="/Home#top" sx={{ marginLeft: "auto" }} size="large" edge="start" aria-label="logo">
                    <SmartToyOutlined/>
                </IconButton>
                <Typography sx={{ frontSize: "1.5 rem" }} variant="h6" component="div" style={{ color: 'black' }}>
                    Aisle8
                </Typography>
                {
                    isMatch ? (
                        <>
                            <DrawerComp />
                        </>
                    ) : (
                        <>
                            <Tabs style={{ color: 'black' }} sx={{ margin: "auto", padding: "0.8%" }} value={value} onChange={(e, value) => setValue(value)} indicatorColor="primary">
                                {
                                    PAGES.map((page, index) => (
                                        <Tab component={Link} to={page} key={index} label={page}></Tab>
                                    ))}
                            </Tabs>
                            <Button sx={{ marginRight: "auto" }} variant="contained">
                                <HashLink smooth to="/Team#contact" style={{ color: 'white', textDecoration: 'none' }}>
                                    Contact
                                </HashLink>
                            </Button>
                        </>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}