import React, { useState } from "react"
import { Drawer, List, ListItemText, ListItemButton, IconButton, ListItem } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const PAGES = ["Home", "AI solutions", "About Us", "Team"]
export const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {PAGES.map((page, index) => {
                        return (
                            <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                                <ListItem component={Link} to={page} key={index}>
                                    <ListItemText>{page}</ListItemText>
                                </ListItem>
                            </ListItemButton>
                        )
                    })}
                </List>
            </Drawer >
            <IconButton sx={{ color: "black", marginLeft: "auto" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>
    );
};